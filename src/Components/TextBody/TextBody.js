import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    backgroundColor: '#004d4d',
    color: 'white',
    padding: '10px',
    fontSize: '24px',
    minWidth: '80%',
  },
}));

const TextBody = (props) => {

  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.paper} >{props.text}</Paper>
  )
}


export default TextBody