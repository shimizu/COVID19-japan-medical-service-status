import React  from "react";
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

const GreenCheckbox = withStyles({
  root: {
    padding: 0,
    marginLeft: "0.5em",
    color: "gray",
    "&$checked": {
      color: "#17bebb"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const YellowCheckbox = withStyles({
  root: {
    padding: 0,
    marginLeft: "0.25em",
    color: "gray",
    "&$checked": {
      color: "#FFA500"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const RedCheckbox = withStyles({
  root: {
    padding: 0,
    marginLeft: "0.25em",
    color: "gray",
    "&$checked": {
      color: "#d62246"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const Gray1Checkbox = withStyles({
  root: {
    padding: 0,
    marginLeft: "0.25em",
    color: "gray",
    "&$checked": {
      color: "#c0c0c0"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const Gray2Checkbox = withStyles({
  root: {
    padding: 0,
    marginLeft: "0.25em",
    color: "gray",
    "&$checked": {
      color: "#898989"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

function CheckBoxs(props) {
  const { value, onChange} = props;

  const handleChange = event => {
    onChange({ ...value, [event.target.name]: event.target.checked });
  };


  return (
    <Box elevation={3} id="panel">
      <FormGroup row>
        <CostuomFormControlLabel
          control={
            <GreenCheckbox
              checked={value.normal}
              onChange={handleChange}
              name="normal"
            />
          }
          label="通常"
        />
        <CostuomFormControlLabel
          control={
            <YellowCheckbox
              checked={value.restriction}
              onChange={handleChange}
              name="restriction"
            />
          }
          label="制限"
        />
        <CostuomFormControlLabel
          control={
            <RedCheckbox
              checked={value.stop}
              onChange={handleChange}
              name="stop"
            />
          }
          label="停止"
        />
        <CostuomFormControlLabel
          control={
            <Gray1Checkbox
              checked={value.nobeds}
              onChange={handleChange}
              name="nobeds"
            />
          }
          label="設置なし"
        />
        <CostuomFormControlLabel
          control={
            <Gray2Checkbox
              checked={value.unanswered}
              onChange={handleChange}
              name="unanswered"
            />
          }
          label="未回答"
        />
      </FormGroup>
    </Box>
  );
}

export default CheckBoxs;
