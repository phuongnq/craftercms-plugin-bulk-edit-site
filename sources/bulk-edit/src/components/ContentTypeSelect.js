import React from 'react';
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';

import StudioAPI from '../api/studio';

export default function ContentTypeSelect() {
  const [contentType, setContentType] = React.useState('');
  const [contentTypes, setContentTypes] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await StudioAPI.getContentTypes();
      setContentTypes(data);
    })();
  }, []);

  const handleChange = (event) => {
    setContentType(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-content-type">Content Type</InputLabel>
      <Select
        labelId="select-content-type"
        id="select-content-type-id"
        value={contentType}
        onChange={handleChange}
        label="Content Type"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {contentTypes.map((ct) => (
          <MenuItem key={ct.name} value={ct.name}>
            {ct.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}