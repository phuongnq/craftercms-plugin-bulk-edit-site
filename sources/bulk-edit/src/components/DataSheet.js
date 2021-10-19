/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import { fromEvent } from 'rxjs';

import { contentTypeSub, editContentSub } from '../services/subscribe';
import StudioAPI from '../api/studio';

const useStyles = makeStyles({
  root: {
    height: 400,
    width: '100%',
    '& .edited': {
      backgroundColor: '#b9d5ff91',
      color: '#1a3e72',
    },
  },
});

const getHeadersFromConfig = (data) => {
  const xml = (new DOMParser()).parseFromString(data, 'text/xml');
  const fields = xml.getElementsByTagName('field');
  const headers = [];
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
    const fieldType = field.getElementsByTagName('type')[0].textContent;
    if (fieldType !== 'input' && fieldType !== 'rte') continue;

    const fieldId = field.getElementsByTagName('id')[0].textContent;
    headers.push(fieldId);
  }

  return headers;
};

const getColumns = (fields) => {
  const columns = [{
    field: 'id',
    headerName: 'ID',
    description: 'ID',
    sortable: false,
    width: 90,
    editable: false,
    hide: true,
  }, {
    field: 'path',
    headerName: 'Path',
    description: 'Path',
    sortable: false,
    width: 160,
    editable: false,
  }];

  for (let i = 0; i < fields.length; i +=1 ) {
    const field = fields[i];
    columns.push({
      field: field,
      headerName: field,
      description: field,
      sortable: false,
      width: 160,
      editable: true,
    });
  }

  return columns;
};

const getRowFromContent = (index, path, content, headers) => {
  const xml = (new DOMParser()).parseFromString(content, 'text/xml');
  const row = { id: index, path };
  for (let i = 0; i < headers.length; i += 1) {
    const column = headers[i];
    const field = xml.getElementsByTagName(column)[0];
    row[column] = field ? field.textContent : '';
  };

  return row;
};

const isCellEdited = (params, rows) => {
  if (!params || rows.length === 0) return false;

  const cellId = params.id;
  const cellField = params.field;
  const cellValue = params.value;
  return cellValue !== rows[cellId][cellField];
};

const DataSheet = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const [columns, setColumns] = React.useState([]);
  const [selectedContentType, setSelectedContentType] = React.useState('');
  const [rows, setRows] = React.useState([]);
  const [editedRows, setEditedRows] = React.useState({});
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const [isCancelling, setIsCancelling] = React.useState(false);

  const forceUpdate = React.useReducer(bool => !bool)[1];

  const updateData = async () => {
    console.log(rows);
    const config = await StudioAPI.getContentTypeConfig(selectedContentType);
    const headerList = getHeadersFromConfig(config);
    setColumns(getColumns(headerList));

    const items = await StudioAPI.searchByContentType(selectedContentType);
    const paths = items.map(item => item.path);

    const dtRows = [];
    for (let i = 0; i < paths.length; i += 1) {
      const path = paths[i];

      const content = await StudioAPI.getContent(path);
      const row = getRowFromContent(i, path, content, headerList);
      dtRows.push(row);
    }

    setRows(dtRows);
  };

  React.useImperativeHandle(ref, () => ({
    cancelAllChanges: (evt) => {
      setEditedRows({});
      setEditRowsModel({});
      forceUpdate();
    },
 }));

 React.useEffect(() => {
    console.log(rows);
 }, [rows]);

  React.useEffect(() => {
    let subscriber;
    (async () => {
      subscriber = contentTypeSub.subscribe(async (value) => {
        setSelectedContentType(value);
        const config = await StudioAPI.getContentTypeConfig(value);
        const headerList = getHeadersFromConfig(config);
        setColumns(getColumns(headerList));

        const items = await StudioAPI.searchByContentType(value);
        const paths = items.map(item => item.path);

        const dtRows = [];
        for (let i = 0; i < paths.length; i += 1) {
          const path = paths[i];

          const content = await StudioAPI.getContent(path);
          const row = getRowFromContent(i, path, content, headerList);
          dtRows.push(row);
        }

        setRows(dtRows);
      });
    })();

    return (() => {
      subscriber.unsubscribe();
    })
  }, []);

  const handleEditRowsModelChange = (model) => {
    setEditRowsModel(model);
  };

  const handleOnCellEditCommit = (model, event) => {
    saveEditState(model);
  };

  const saveEditState = (model) => {
    const currentEditedRows = editedRows;
    if (!isCellEdited(model, rows)) return;

    const key = rows[model.id].path;
    if (!currentEditedRows[key]) {
      currentEditedRows[key] = {};
    }
    currentEditedRows[key][model.field] = model.value;
    setEditedRows(currentEditedRows);
    editContentSub.next(currentEditedRows);
  };

  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        editRowsModel={editRowsModel}
        getCellClassName={(params) => {
          if (!params.isEditable) return '';
          return isCellEdited(params, rows) ? 'edited' : '';
        }}
        onEditRowsModelChange={handleEditRowsModelChange}
        onCellEditCommit={handleOnCellEditCommit}
      />
    </div>
  );
});

export default DataSheet;
