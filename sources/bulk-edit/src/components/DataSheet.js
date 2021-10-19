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

import { contentTypeSub } from '../services/subscribe';
import StudioAPI from '../api/studio';

const getFieldsFromConfig = (data) => {
  const xml = (new DOMParser()).parseFromString(data, 'text/xml');
  const fields = xml.getElementsByTagName('field');
  const columns = [];
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
    const fieldType = field.getElementsByTagName('type')[0].textContent;
    if (fieldType !== 'input' && fieldType !== 'rte') continue;

    const fieldId = field.getElementsByTagName('id')[0].textContent;
    columns.push(fieldId);
  }

  return columns;
};

const getSheetColumns = (fields) => {
  const columns = [{
    field: 'id',
    headerName: 'ID',
    description: 'ID',
    sortable: false,
    width: 90,
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

const getRowFromContent = (index, content, columns) => {
  const xml = (new DOMParser()).parseFromString(content, 'text/xml');
  console.log(xml);
  const row = { id: index };
  for (let i = 0; i < columns.length; i += 1) {
    const column = columns[i];
    const field = xml.getElementsByTagName(column.field)[0];
    console.log(field);
    row[column.field] = field ? field.textContent : '';
  };

  return row;
};

export default function DataSheet() {
  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      contentTypeSub.subscribe(async (value) => {
        const config = await StudioAPI.getContentTypeConfig(value);
        const ctColumns = getFieldsFromConfig(config);
        setColumns(getSheetColumns(ctColumns));

        const items = await StudioAPI.searchByContentType(value);
        const paths = items.map(item => item.path);

        const dtRows = [];
        paths.forEach(async (path, index) => {
          console.log(path);
          const content = await StudioAPI.getContent(path);
          console.log(content);
          const row = getRowFromContent(index, content, ctColumns);
          dtRows.push(row);
        });
        setRows(dtRows);
      });
    })();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}