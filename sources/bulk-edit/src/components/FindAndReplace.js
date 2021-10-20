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
  styled
} from '@mui/material';
import Draggable from 'react-draggable';

import { findReplaceSub } from '../services/subscribe';

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
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function FindAndReplaceDialog({ isOpen, handleClose }) {
  const [findText, setFindText] = React.useState('');
  const [replaceText, setReplaceText] = React.useState('');
  const [action, setAction] = React.useState('');

  React.useEffect(() => {
    findReplaceSub.next({
      findText,
      replaceText,
      action,
    })
  }, [findText, replaceText, action]);

  const isButtonsDisable = (text) => {
    return !text;
  };

  const handleFindClick = () => {
    setAction('find');
  };

  const handleReplaceAllClick = () => {
    setAction('replace');
    handleClose();
  };

  return (
    <div>
      <Dialog
        maxWidth="md"
        PaperComponent={PaperComponent}
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Find and replace</DialogTitle>
        <DialogContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ padding: '16px' }}
        >
          <StyledTextField
            fullWidth
            id="find"
            label="Find"
            placeholder="Enter keywords"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
          />
          <StyledTextField
            fullWidth
            id="replace"
            label="Replace with"
            placeholder="Enter replace words"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
          />
        </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            <StyledButton variant="outlined" onClick={handleClose}>Done</StyledButton>
            <StyledButton
              variant="outlined"
              disabled={isButtonsDisable(findText)}
              onClick={handleReplaceAllClick}
            >
              Replace All
            </StyledButton>
            <StyledButton
              variant="outlined"
              disabled={isButtonsDisable(findText)}
              onClick={handleFindClick}
            >
              Find
            </StyledButton>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};
