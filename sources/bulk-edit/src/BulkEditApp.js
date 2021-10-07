import * as React from 'react';
import { Button, Stack } from '@mui/material';

function ReactComponent({ text}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Bulk Edit</Button>
    </Stack>
  );
}

export default ReactComponent;

