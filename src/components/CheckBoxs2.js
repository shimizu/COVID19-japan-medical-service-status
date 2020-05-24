import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CostuomFormControlLabel = withStyles({
  root: {
    padding: 0,
    margin: 0
  }
})(props => <FormControlLabel color="default" {...props} />);

const CCheckbox = withStyles({
  root: {
    padding: 0,
    marginLeft: "0.5em",
    color: "#aaaaff",
    "&$checked": {
      color: "#aaaaff"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

function CheckBoxs(props) {
  const { value, onChange } = props;

  const handleChange = event => {
    onChange({ ...value, [event.target.name]: event.target.checked });
  };

  return (
    <Box elevation={3} id="panel">
      <FormGroup row>
        <CostuomFormControlLabel
          control={
            <CCheckbox
              checked={value.ambulatoryCare_weekdays}
              onChange={handleChange}
              name="ambulatoryCare_weekdays"
            />
          }
          label="外来(平日)"
        />
        <CostuomFormControlLabel
          control={
            <CCheckbox
              checked={value.ambulatoryCare_holiday}
              onChange={handleChange}
              name="ambulatoryCare_holiday"
            />
          }
          label="外来(土日)"
        />
        <CostuomFormControlLabel
          control={
            <CCheckbox
              checked={value.admission}
              onChange={handleChange}
              name="admission"
            />
          }
          label="入院"
        />
        <CostuomFormControlLabel
          control={
            <CCheckbox
              checked={value.emergency}
              onChange={handleChange}
              name="emergency"
            />
          }
          label="救急"
        />
        <CostuomFormControlLabel
          control={
            <CCheckbox
              checked={value.dialysis}
              onChange={handleChange}
              name="dialysis"
            />
          }
          label="透析"
        />
        <CostuomFormControlLabel
          control={
            <CCheckbox
              checked={value.chemotherapy}
              onChange={handleChange}
              name="chemotherapy"
            />
          }
          label="化学療法"
        />
      </FormGroup>
    </Box>
  );
}

export default CheckBoxs;
