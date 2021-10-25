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
  IconButton,
  AppBar,
  Typography
} from '@mui/material';

import FindReplaceIcon from '@mui/icons-material/FindReplace';
import FilterListIcon from '@mui/icons-material/FilterList';
import SaveIcon from '@mui/icons-material/Save';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import MenuIcon from '@mui/icons-material/Menu';

import ContentTypeSelect from './ContentTypeSelect';
import FindAndReplace from './FindAndReplace';
import DataSheet from './DataSheet';

const DRAWER_WIDTH = 240;

export default function Editor() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [findReplaceDialogOpen, setFindReplaceDialogOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const rootRef = React.useRef(null);
  const dataSheetRef = React.useRef(null);

  const handleFindReplaceDialogClose = () => {
    setFindReplaceDialogOpen(false);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleSaveChangeClick = async () => {
    dataSheetRef.current.saveAllChanges();
    setOpenAlert(true);
  };

  const handleCancelAllChangeClick = () => {
    dataSheetRef.current.cancelAllChanges();
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
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
        <ListItem button key="Cancel All Change" onClick={handleCancelAllChangeClick}>
          <ListItemIcon>
            <ClearAllIcon />
          </ListItemIcon>
          <ListItemText primary="Cancel All Change" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <Box
      id="drawer-container"
      position="relative"
      bgcolor="white"
      component="div"
      style={{ overflowY: "scroll", overflowX: "hidden" }}
      ref={rootRef}
    >
      <CssBaseline />
        <AppBar position="relative" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Bulk Edit
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
            container: () => rootRef.current,
            style: { position: "absolute" },
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH, position: 'absolute' },
          }}
        >
          {drawer}
        </Drawer>
        <FindAndReplace isOpen={findReplaceDialogOpen} handleClose={handleFindReplaceDialogClose} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DataSheet ref={dataSheetRef} />
        </Box>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            Change has been saved.
          </Alert>
        </Snackbar>
    </Box>
  );
};
