import React from 'react'
import {InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useState } from "react";

const GenericSelect = () => {
    const [lang, setLang] = useState("uzbek");

    const handleChange = (event) => {
      setLang(event.target.value);
    };

  return (
      <FormControl fullWidth sx={{ m: 1, minWidth: 120, width: 150 }} size="small">
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleChange}
          >
        <MenuItem value={"uzbek"}>Uzbek</MenuItem>
        <MenuItem value={"english"}>English</MenuItem>
        <MenuItem value={"russian"}>Russian</MenuItem>
          </Select>
      </FormControl>
  )
}

export default GenericSelect





//-----------------------------
// import Box from '@mui/material/Box';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
    
//     </Box>
//   );
// }
