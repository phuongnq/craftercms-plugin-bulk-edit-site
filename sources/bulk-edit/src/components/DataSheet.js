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

const rows = [
  { id: 1, 'internal-name': 'Test 1', 'title_t': 'Test 1' },
  { id: 2, 'internal-name': 'Test 2', 'title_t': 'Test 2' },
  { id: 3, 'internal-name': 'Test 3', 'title_t': 'Test 3' },
];

const getColumns = (data) => {
  const xml = (new DOMParser()).parseFromString(data, 'text/xml');
  const fields = xml.getElementsByTagName('field');
  const columns = [];
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
    const fieldType = field.getElementsByTagName('type')[0].textContent;
    if (fieldType !== 'input') continue;

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

  for (let i = 0; i <fields.length; i +=1 ) {
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

export default function DataSheet() {
  const [descriptor, setDescriptor] = React.useState('');
  const [columns, setColumns] = React.useState([]);
  React.useEffect(() => {
    contentTypeSub.subscribe((value) => {
      const ctColumns = getColumns(value);
      setColumns(getSheetColumns(ctColumns));
    });
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