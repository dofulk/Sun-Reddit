import React from 'react';
import './Button.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  root: {
    borderRadius: 2,
    color: 'white',
    backgroundColor: '#005C5C',
    boxShadow: '4px 4px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#006161',
      boxShadow: '6px 6px',
    }
  },
});

const MyButton = (props) => {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.root} onClick={props.handleClick} disableElevation>
      {props.label}
    </Button>
  );
} 

export default MyButton;