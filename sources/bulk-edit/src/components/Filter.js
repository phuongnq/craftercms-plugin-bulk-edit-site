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
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Paper,
  styled
} from '@mui/material';
import Draggable from 'react-draggable';

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '5px',
  float: 'right'
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-filter-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function FilterDialog({ isOpen, handleClose }) {
  const [keyword, setKeyword] = React.useState('');

  return (
    <div>
      <Dialog
        maxWidth="md"
        aria-labelledby="draggable-filter-dialog-title"
        PaperComponent={PaperComponent}
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle
          style={{ cursor: 'move' }}
          id="draggable-filter-dialog-title"
        >
          Apply Filter
        </DialogTitle>
        <DialogContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ padding: '16px' }}
        >
          <StyledTextField
            fullWidth
            id="search"
            label="keyword"
            placeholder="Search with keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            <StyledButton variant="outlined" onClick={handleClose}>Cancel</StyledButton>
            <StyledButton
              variant="outlined"
              onClick={handleApplyFilter}
            >
              Apply Filter
            </StyledButton>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};
