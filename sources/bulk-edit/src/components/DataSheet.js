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
import {
  IconButton
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import PathCell from './PathCell';
import MediaCell from './MediaCell';
import RTECell from './RTECell';
import CellActionMenu from './CellActionMenu';
import SaveProgress from './SaveProgress';
import RowActionMenu from './RowActionMenu';

import {
  contentTypeSub,
  findReplaceSub,
  keywordSub,
  filterEditDateSub
} from '../services/subscribe';
import StudioAPI from '../api/studio';
import ActionHelper from '../helpers/action';
import ContentTypeHelper from '../helpers/content_type';
import DialogHelper from '../helpers/dialog';

const PAGE_SIZE = 100;
const ROWS_PER_PAGE_OPTIONS = [100];
const DEFAULT_COLUMN_WIDTH = 220;

const useStyles = makeStyles({
  root: {
    height: 400,
    width: '100%',
    '& .edited': {
      backgroundColor: '#a5d6a7',
      color: '#1b5e20',
    },
    '& .found': {
      backgroundColor: '#b9d5ff91',
      color: '#1a3e72',
    },
  },
});

/**
 * @param {*} config - form-definition.xml
 * @returns
 */
const getDisplayFieldsFromConfig = (config) => {
  const xml = (new DOMParser()).parseFromString(config, 'text/xml');
  const fields = xml.getElementsByTagName('field');
  const headers = [];
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
    const fieldType = field.getElementsByTagName('type')[0].textContent;
    if (!ContentTypeHelper.isFieldTypeSupported(fieldType)) continue;

    const fieldId = field.getElementsByTagName('id')[0].textContent;
    const title = field.getElementsByTagName('title')[0].textContent;
    headers.push({ fieldId, fieldType, title });
  }

  return headers;
};

const buildColumnsFromDisplayFields = (displayFields) => {
  // default to have `id` and `path`
  const columns = [{
    field: 'action',
    headerName: 'Action',
    description: 'Action',
    sortable: false,
    width: 72,
    editable: false,
    align: 'center',
    renderCell: ((params) => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ))
  }, {
    field: 'id',
    headerName: 'ID',
    description: 'ID',
    sortable: false,
    width: 0,
    editable: false,
    hide: true,
  }, {
    field: 'path',
    headerName: 'Path',
    description: 'Path',
    sortable: false,
    width: DEFAULT_COLUMN_WIDTH,
    editable: false,
    renderCell: PathCell,
  }];

  for (let i = 0; i < displayFields.length; i +=1 ) {
    const field = displayFields[i];
    const { fieldId, fieldType, title } = field;
    const column = {
      field: fieldId,
      headerName: title,
      description: title,
      sortable: false,
      width: DEFAULT_COLUMN_WIDTH,
      editable: true,
      fieldType,
    };

    if (fieldType === ContentTypeHelper.FIELD_TYPE_RTE) {
      column.renderCell = RTECell;
    }

    if (ContentTypeHelper.isMediaType(fieldType)) {
      column.renderCell = MediaCell;
    }

    columns.push(column);
  }

  return columns;
};

const getColumnProperties = (fieldName, columns) => {
  return columns.find((cl) => cl.field === fieldName);
};

const rowFromApiContent = (index, path, content, fieldIds, meta) => {
  const xml = (new DOMParser()).parseFromString(content, 'text/xml');
  const row = { id: index, path };
  if (meta && meta.lockOwner) {
    row.lockOwner = meta.lockOwner;
  }
  for (let i = 0; i < fieldIds.length; i += 1) {
    const fieldId = fieldIds[i];
    const field = xml.getElementsByTagName(fieldId)[0];
    row[fieldId] = field ? field.textContent : '';
  };

  return row;
};

const isCellEdited = (params, rows) => {
  if (!params || rows.length === 0) return false;

  const cellId = params.id;
  const cellField = params.field;
  const cellValue = params.value;
  return rows[cellId] && cellValue !== rows[cellId][cellField];
};

const isCellContainText = (text, params) => {
  if (!text || !params) return false;

  const cellValue = params.value;
  return cellValue.indexOf(text) >= 0;
};

const writeContent = async (path, editedObj) => {
  const content = await StudioAPI.getContent(path);
  if (!content) {
    return;
  }

  const xml = (new DOMParser()).parseFromString(content, 'text/xml');

  const keys = Object.keys(editedObj);
  for (let i = 0; i < keys.length; i++) {
    const fieldName = keys[i];
    const value = editedObj[fieldName];
      const node = xml.getElementsByTagName(fieldName)[0];
      if (node) {
        node.textContent = value;
      }
  }

  const newContent = new XMLSerializer().serializeToString(xml);
  const res = await StudioAPI.writeContent(path, newContent);
  if (res) {
    return newContent;
  }

  return null;
};

const DataSheet = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [sessionRows, setSessionRows] = React.useState([]);
  const [editedRows, setEditedRows] = React.useState({});
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const [refresh, setRefresh] = React.useState(0);
  const [findText, setFindText] = React.useState('');
  const [contentType, setContentType] = React.useState('');
  const [keyword, setKeyword] = React.useState('');
  const [filterEditDate, setFilterEditDate] = React.useState(null);
  const [menuActionAnchor, setMenuActionAnchor] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState({});
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [bulkCompletedCount, setBulkCompletedCount] = React.useState(0);
  const [bulkTotalCount, setBulkTotalCount] = React.useState(0);
  const [rowActionMenuAnchor, setRowActionMenuAnchor] = React.useState(null);

  React.useImperativeHandle(ref, () => ({
    cancelAllChanges: () => {
      setRefresh(1 - refresh);
    },
    saveAllChanges: async () => {
      const keys = Object.keys(editedRows);

      const totalCount = keys.length;
      let completedCount = 0;
      const failedRows = [];

      if (totalCount === 0) {
        return;
      }

      setIsProcessing(true);
      setBulkTotalCount(totalCount);

      const fieldIds = columns.map((cl) => cl.field).filter((field) => field !== 'id' && field !== 'path' && field !== 'action');

      for (let i = 0; i < totalCount; i++) {
        const path = keys[i];
        const newContent = await writeContent(path, editedRows[path], contentType);
        if (!newContent) {
          console.log(`Error while saving path ${path}`);
          failedRows.push(editedRows[path]);
        } else {
          completedCount += 1;
          setBulkCompletedCount(completedCount);
          const row = sessionRows.find((r) => r.path === path);
          if (row) {
            const rowIndex = row.id;
            sessionRows[rowIndex] = rowFromApiContent(rowIndex, path, newContent, fieldIds);
          }
        }
      };

      if (completedCount === totalCount) {
        setTimeout(() => {
          setIsProcessing(false);
        }, 4000);
        setSessionRows(sessionRows);
        setRows(sessionRows);
        setEditedRows({});
        setRefresh(1 - refresh);
      } else {
        setEditedRows(failedRows);
      }
    },
  }));

  const replaceTextInAllRows = (text, replaceText, rows, columns) => {
    const newRows = [];
    for (let i = 0; i < rows.length; i +=1 ) {
      const newRow = replaceTextInRow(text, replaceText, rows[i], columns);
      newRows.push(newRow);
    }

    return newRows;
  };

  const replaceTextInRow = (text, replaceText, row, columns) => {
    const newRow = {};
    const keys = Object.keys(row);

    for (let i = 0; i < keys.length; i +=1 ) {
      const fieldName = keys[i];
      const fieldValue = row[fieldName];
      let newFieldValue = fieldValue;
      const props = getColumnProperties(fieldName, columns);
      if (props.editable) {
        newFieldValue = fieldValue.replaceAll(text, replaceText);
      }

      if (newFieldValue !== fieldValue) {
        const model = { id: row.id, field: fieldName, value: newFieldValue };
        saveEditState(model);
      }

      newRow[fieldName] = newFieldValue;
    }

    return newRow;
  };

  React.useEffect(() => {
    const subscriber = findReplaceSub.subscribe((value) => {
      const {
        findText,
        replaceText,
        action
      } = value;
      if (action === ActionHelper.FIND) {
        setFindText(findText);
      }

      if (action === ActionHelper.REPLACE) {
        const newRows = replaceTextInAllRows(findText, replaceText, rows, columns);
        setSessionRows(newRows);
      }
    });

    return (() => {
      subscriber.unsubscribe();
    });
  }, [rows]);

  React.useEffect(() => {
    const subscriberContentType = contentTypeSub.subscribe((nextContentType) => {
      setContentType(nextContentType);
    });

    const subscriberKeyword = keywordSub.subscribe((keyword) => {
      setKeyword(keyword);
    });

    const subscriberEditDate = filterEditDateSub.subscribe((filterDate) => {
      setFilterEditDate(filterDate);
    })

    return (() => {
      subscriberContentType.unsubscribe();
      subscriberKeyword.unsubscribe();
      subscriberEditDate.unsubscribe();
    });
  }, []);

  React.useEffect(() => {
    (async () => {
      if (!contentType) {
        return;
      }

      setRefresh(1 - refresh);

      const config = await StudioAPI.getContentTypeConfig(contentType);
      const displayFields = getDisplayFieldsFromConfig(config);
      setColumns(buildColumnsFromDisplayFields(displayFields));

      const items = await StudioAPI.searchByContentType(contentType, keyword, filterEditDate);
      const paths = items.map(item => item.path);

      const dtRows = [];
      const dtSessionRows = [];
      for (let i = 0; i < paths.length; i += 1) {
        const path = paths[i];

        const content = await StudioAPI.getContent(path);
        const meta = await StudioAPI.getSandboxItemByPath(path);
        const fieldIds = displayFields.map((elm) => elm.fieldId);
        const row = rowFromApiContent(i, path, content, fieldIds, meta);
        dtRows.push({ ...row });
        dtSessionRows.push({ ...row });
      }

      setRows(dtRows);
      setSessionRows(dtSessionRows);
    })();
  }, [contentType, keyword, filterEditDate]);

  const handleEditRowsModelChange = (model) => {
    setEditRowsModel(model);
  };

  const handleOnCellEditCommit = (model, event) => {
    saveEditState(model);
    const newSessionRows = sessionRows;
    newSessionRows
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

  const handleOnCellClick = (model, event, detail) => {
    setSelectedRow(model);

    const field = model.field;
    if (field === 'action') {
      event.preventDefault();
      event.stopPropagation();
      setRowActionMenuAnchor(event.currentTarget);
      return;
    }

    const fieldType = model.colDef.fieldType;
    if (ContentTypeHelper.isMediaType(fieldType) || ContentTypeHelper.isRteType(fieldType)) {
      event.preventDefault();
      event.stopPropagation();
      setMenuActionAnchor(event.currentTarget);
    }
  };

  const handleMenuActionViewClick = (event) => {
    setMenuActionAnchor(null);
    const isEdit = false;
    openEditDialog(isEdit);
  };

  const handleMenuActionEditClick = (event) => {
    setMenuActionAnchor(null);
    const isEdit = true;
    openEditDialog(isEdit);
  };

  const openEditDialog = (isEdit) => {
    const { row, field } = selectedRow;
    const payload = {
      path: row.path,
      authoringBase: CrafterCMSNext.system.store.getState().env.authoringBase,
      site: StudioAPI.siteId(),
      readonly: !isEdit,
      selectedFields: [field]
    };

    const onEditedSussessful = (response) => {
      const model = selectedRow;
      model.path = response.updatedModel[model.field];
      model.value = response.updatedModel[model.field];
      sessionRows[model.id][model.field] = response.updatedModel[model.field];
      setSessionRows(sessionRows);
      saveEditState(model);
      setSelectedRow({});
    };

    const onEditedFailed = (error) => {
      setSelectedRow({});
    };

    DialogHelper.showEditDialog(payload, onEditedSussessful, onEditedFailed);
  };

  const handleRowMenuActionUnlock = async () => {
    const { row } = selectedRow;
    if (!row || !row.path || !row.lockOwner) return;

    const res = await StudioAPI.unlockContent(row.path);
    if (res) {
      sessionRows[row.id].lockOwner = null;
      setSessionRows(sessionRows);
    }

    setRowActionMenuAnchor(null);
  };

  const handleRowMenuActionSave = async () => {
    const { row } = selectedRow;
    if (!row || !row.path) {
      setRowActionMenuAnchor(null);
      return;
    }

    const path = row.path;
    if (!editedRows[path]) {
      setRowActionMenuAnchor(null);
      return;
    }

    const newContent = await writeContent(path, editedRows[path], contentType);
    if (newContent) {
      const fieldIds = columns.map((cl) => cl.field).filter((field) => field !== 'id' && field !== 'path' && field !== 'action');
      sessionRows[row.id] = rowFromApiContent(row.id, path, newContent, fieldIds);
      rows[row.id] = sessionRows[row.id]
      setSessionRows(sessionRows);
      setRows(rows);
    }

    setRowActionMenuAnchor(null);
  };

  const handleRowMenuActionClear = async () => {
    const { row } = selectedRow;
    if (!row || !row.path) {
      setRowActionMenuAnchor(null);
      return;
    }

    const path = row.path;
    const content = await StudioAPI.getContent(path);
    if (!content) {
      setRowActionMenuAnchor(null);
      return;
    }

    const meta = await StudioAPI.getSandboxItemByPath(path);
    if (!meta) {
      setRowActionMenuAnchor(null);
      return;
    }

    const fieldIds = columns.map((cl) => cl.field).filter((field) => field !== 'id' && field !== 'path' && field != 'action');
    const rowFromApi = rowFromApiContent(row.id, path, content, fieldIds, meta);
    sessionRows[row.id] = rowFromApi;
    setSessionRows([...sessionRows]);

    delete editedRows[path];
    setEditedRows(editedRows);
    setRowActionMenuAnchor(null);
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
        onCellClick={handleOnCellClick}
        getCellClassName={(params) => {
          if (!params.isEditable) return '';

          if (isCellEdited(params, rows)) {
            return 'edited';
          }

          if (findText && isCellContainText(findText, params)) {
            return 'found';
          }

          return '';
        }}
        onEditRowsModelChange={handleEditRowsModelChange}
        onCellEditCommit={handleOnCellEditCommit}
      />
      <RowActionMenu
        anchorEl={rowActionMenuAnchor}
        handleClose={() => setRowActionMenuAnchor(null)}
        handleUnlockAction={handleRowMenuActionUnlock}
        handleSaveAction={handleRowMenuActionSave}
        handleClearAction={handleRowMenuActionClear}
        selectedCell={selectedRow}
      />
      <CellActionMenu
        anchorEl={menuActionAnchor}
        handleClose={() => setMenuActionAnchor(null)}
        handleViewAction={handleMenuActionViewClick}
        handleEditAction={handleMenuActionEditClick}
      >
      </CellActionMenu>
      {isProcessing && (
        <SaveProgress
          completed={bulkCompletedCount}
          total={bulkTotalCount}
        />
      )}
    </div>
  );
});

export default DataSheet;
