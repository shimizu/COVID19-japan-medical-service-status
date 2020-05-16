import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
  const top = 25; 
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${left}%, -${top}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const {body, open, onClose} = props;

  
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  


  const wrapper = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title"><a rel="noopener noreferrer" href="https://cio.go.jp/hosp_monitoring_c19">全国医療機関の医療提供体制の状況のオープンデータ</a></h2>
      <div id="simple-modal-description">
        {body}
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {wrapper}
      </Modal>
    </div>
  );
}
