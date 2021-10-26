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
  styled,
} from '@mui/material';

import FindReplaceIcon from '@mui/icons-material/FindReplace';
import FilterListIcon from '@mui/icons-material/FilterList';
import SaveIcon from '@mui/icons-material/Save';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import MenuIcon from '@mui/icons-material/Menu';

import ContentTypeSelect from './ContentTypeSelect';
import FindAndReplace from './FindAndReplace';
import FilterDialog from './Filter';
import DataSheet from './DataSheet';

const DRAWER_WIDTH = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WIDTH}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

export default function Editor() {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [findReplaceDialogOpen, setFindReplaceDialogOpen] = React.useState(false);
  const [filterDialogOpen, setFilterDialogOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const rootRef = React.useRef(null);
  const dataSheetRef = React.useRef(null);

  const handleFindReplaceDialogClose = () => {
    setFindReplaceDialogOpen(false);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const appbar = (
    <Box position="relative">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Box>
  );

  const drawer = (
    <Drawer
      variant="persistent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      PaperProps={{
        style: {
          position: "absolute",
          width: DRAWER_WIDTH,
          top: "130px",
          height: "auto"
        }
      }}
      BackdropProps={{ style: { position: "absolute" } }}
      open={drawerOpen}
      ModalProps={{
        container: document.getElementById("drawer-container"),
        style: { position: 'absolute' },
        disableEnforceFocus: true,
        keepMounted: true,
      }}
      SlideProps={{
        onExiting: (node) => {
          node.style.webkitTransform = "scaleX(0)";
          node.style.transform = "scaleX(0)";
          node.style.transformOrigin = "top left ";
        },
      }}
    >
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
        <ListItem button key="Apply Filters" onClick={() => setFilterDialogOpen(true)}>
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
    </Drawer>
  );

  return (
    <Box>
      <CssBaseline />
      {appbar}
      <section
        id="drawer-container"
        position="relative"
        bgcolor="white"
        component="div"
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          display: "flex",
          border: "1px solid #e0e0e0",
          height: "calc(100vh - 194px)",
        }}
        ref={rootRef}
      >
        {drawer}
        <Main open={drawerOpen}>
          <DataSheet ref={dataSheetRef} />
        </Main>
      </section>
      <FindAndReplace isOpen={findReplaceDialogOpen} handleClose={handleFindReplaceDialogClose} />
      <FilterDialog isOpen={filterDialogOpen} handleClose={handleFilterDialogClose} />
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Change has been saved.
        </Alert>
      </Snackbar>
    </Box>
  );
};
