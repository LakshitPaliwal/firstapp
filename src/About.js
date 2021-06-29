import React, {Component} from 'react';
import './App.css';
import About1 from './About1';

// import Button from '@material-ui/core/Button';
import VideoStream from './VideoStream';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
const About=()=> {
 
  const classes = useStyles();

  
      return (
  <div>
      <div className="App">
          {/* <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}><About1/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><About1/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><About1/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><About1/></Paper>
        </Grid>
       
      </Grid>
    </div> */}

        <VideoStream/>

      </div>
    </div>
  );

}


export default About;
