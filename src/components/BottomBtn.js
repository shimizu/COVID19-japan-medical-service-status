import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import GrainIcon from "@material-ui/icons/Grain";
import GridOnIcon from "@material-ui/icons/GridOn";

const CosutmBottomNavigationAction = withStyles({
  root: {
    color: "#999",
    "&$selected": {
      color: "#00f"
    }
  },
  selected: {}
})(props => <BottomNavigationAction color="default" {...props} />);

function BottomBtn(props) {
  const { value, onChange } = props;

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      showLabels
    >
      <CosutmBottomNavigationAction
        label="Point"
        value="point"
        icon={<GrainIcon />}
      />
      <CosutmBottomNavigationAction
        label="Hex"
        value="hex"
        icon={<GridOnIcon />}
      />
    </BottomNavigation>
  );
}

export default BottomBtn;
