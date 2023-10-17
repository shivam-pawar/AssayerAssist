import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";
const SampleTypeSelector = () => {
  const [value, setValue] = React.useState("gold");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel>Sample Type</FormLabel>
      <RadioGroup row value={value} onChange={handleChange}>
        <FormControlLabel
          value="gold"
          control={
            <Radio
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          label="Gold"
        />
        <FormControlLabel
          value="silver"
          control={<Radio color="success" />}
          label="Silver"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default SampleTypeSelector;
