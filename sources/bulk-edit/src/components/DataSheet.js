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

import { contentTypeSub, findReplaceSub } from '../services/subscribe';
import StudioAPI from '../api/studio';

const PAGE_SIZE = 100;
const ROWS_PER_PAGE_OPTIONS = [100];

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

const getColumn = (fieldName, columns) => {
  return columns.find((cl) => cl.field === fieldName);
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

const updateAllRows = (text, replaceText, rows, columns) => {
  const newRows = [];
  for (let i = 0; i < rows.length; i +=1 ) {
    const newRow = updateRow(text, replaceText, rows[i], columns);
    newRows.push(newRow);
  }

  return newRows;
};

const updateRow = (text, replaceText, currentRow, columns) => {
  const newRow = {};
  const keys = Object.keys(currentRow);

  for (let i = 0; i < keys.length; i +=1 ) {
    const fieldName = keys[i];
    let fieldValue = currentRow[fieldName];
    const column = getColumn(fieldName, columns);
    if (column.editable) {
      fieldValue = fieldValue.replaceAll(text, replaceText);
    }

    newRow[fieldName] = fieldValue;
  }

  return newRow;
};

const isCellEdited = (params, rows) => {
  if (!params || rows.length === 0) return false;

  const cellId = params.id;
  const cellField = params.field;
  const cellValue = params.value;
  return cellValue !== rows[cellId][cellField];
};

const updateContent = async (path, fields) => {
  const content = await StudioAPI.getContent(path);
  if (!content) {
    return;
  }

  const xml = (new DOMParser()).parseFromString(content, 'text/xml');

  const keys = Object.keys(fields);
  for (let i = 0; i < keys.length; i++) {
    const fieldName = keys[i];
    const value = fields[fieldName];
      const node = xml.getElementsByTagName(fieldName)[0];
      if (node) {
        node.textContent = value;
      }
  }

  return await StudioAPI.writeContent(path, (new XMLSerializer()).serializeToString(xml));
};

const DataSheet = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [sessionRows, setSessionRows] = React.useState([]);
  const [editedRows, setEditedRows] = React.useState({});
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const [refresh, setRefresh] = React.useState(0);

  React.useImperativeHandle(ref, () => ({
    cancelAllChanges: () => {
      setRefresh(1 - refresh);
    },
    saveAllChanges: () => {
      const keys = Object.keys(editedRows);
      if (keys.length === 0) {
        return;
      }

      keys.forEach(async (path) => {
        const res = await updateContent(path, editedRows[path]);
        if (!res) {
          console.log(`Error while saving path ${path}`);
        }
      });
    },
  }));

  React.useEffect(() => {
    const subscriber = findReplaceSub.subscribe((value) => {
      const {
        findText,
        replaceText,
        action
      } = value;
      if (action === 'replace') {
        const newRows = updateAllRows(findText, replaceText, rows, columns);
        setSessionRows(newRows);
      }
    });

    return (() => {
      subscriber.unsubscribe();
    });
  }, [rows]);

  React.useEffect(() => {
    let subscriber;
    (async () => {
      subscriber = contentTypeSub.subscribe(async (value) => {
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
        setSessionRows(dtRows);
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
  };

  return (
    <div className={classes.root}>
      <DataGrid
        key={refresh}
        rows={sessionRows}
        columns={columns}
        pageSize={PAGE_SIZE}
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
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
