import React from 'react';
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';

export default function ContentTypeSelect() {
  const [contentType, setContentType] = React.useState('');

  const handleChange = (event) => {
    setContentType(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Content Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={contentType}
          onChange={handleChange}
          label="Content Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}