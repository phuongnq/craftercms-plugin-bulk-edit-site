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

import React from 'react';
import {
  Box,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Drawer,
  Snackbar,
  Alert,
} from '@mui/material';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import FilterListIcon from '@mui/icons-material/FilterList';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';

import ContentTypeSelect from './ContentTypeSelect';
import FindAndReplace from './FindAndReplace';
import DataSheet from './DataSheet';

import { editContentSub } from '../services/subscribe';
import StudioAPI from '../api/studio';

const drawerWidth = 240;

const updateContent = async (data) => {
  const path = Object.keys(data)[0];
  const fields = data[path];

  const content = await StudioAPI.getContent(path);
  console.log(content);
  if (!content) {
    return;
  }

  const xml = (new DOMParser()).parseFromString(content, 'text/xml');

  const keys = Object.keys(fields);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    const fieldName = fields[keys[i]];
    const value = data[fieldName];
      const node = xml.getElementsByTagName(fieldName)[0];
      if (node) {
        node.textContent = value;
      }
  }

  console.log((new XMLSerializer()).serializeToString(xml));
  const res = await StudioAPI.writeContent(path, (new XMLSerializer()).serializeToString(xml));
  console.log(res);
};

export default function Editor(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [findReplaceDialogOpen, setFindReplaceDialogOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [editedRows, setEditedRows] = React.useState({});

  React.useEffect(() => {
    editContentSub.subscribe((value) => {
      setEditedRows(value);
    });
  }, []);

  const handleFindReplaceDialogClose = () => {
    setFindReplaceDialogOpen(false);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleSaveChangeClick = async () => {
    console.log(editedRows);
    const keys = Object.keys(editedRows);
    if (keys.length === 0) {
      return;
    }

    keys.forEach(async (key) => {
      const data = editedRows[key];
      await updateContent(data);
    });

    setOpenAlert(true);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ContentTypeSelect />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Find and Replace" onClick={() => setFindReplaceDialogOpen(true)}>
              <ListItemIcon>
                <FindReplaceIcon />
              </ListItemIcon>
              <ListItemText primary="Find and Replace" />
        </ListItem>
        <ListItem button key="Apply Filters">
          <ListItemIcon>
            <FilterListIcon />
          </ListItemIcon>
          <ListItemText primary="Apply Filters" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Save Change" onClick={handleSaveChangeClick}>
          <ListItemIcon>
            <SaveIcon />
          </ListItemIcon>
          <ListItemText primary="Save Change" />
        </ListItem>
        <ListItem button key="Undo">
          <ListItemIcon>
            <UndoIcon />
          </ListItemIcon>
          <ListItemText primary="Undo" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: 'absolute' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: 'absolute' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DataSheet />
        <FindAndReplace isOpen={findReplaceDialogOpen} handleClose={handleFindReplaceDialogClose} />
      </Box>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Change has been saved.
        </Alert>
      </Snackbar>
    </Box>
  );
};
