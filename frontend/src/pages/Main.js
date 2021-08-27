import { makeStyles } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100hv'
  },
}));

function Main() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <h1>Hello world</h1>
    </div>
  );
}

export default Main;