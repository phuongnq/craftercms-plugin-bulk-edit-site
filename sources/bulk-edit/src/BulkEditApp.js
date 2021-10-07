import React from 'react';
import { Button, Stack } from '@mui/material';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';

function BulkEditApp() {
  return (
    <Stack spacing={2} direction="row">
      <AutoAwesomeMotionOutlinedIcon />
      <Button variant="contained">Bulk Edit</Button>
    </Stack>
  );
}

export default BulkEditApp;

