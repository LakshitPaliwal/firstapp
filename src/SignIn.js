import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
import SignUp from './SignUp';
import Index from './IndexComp/Index';


const Help= (props)=> {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
       {props.Help} &nbsp;
      <Link color="inherit" to="/" className="appLink">
        Help
      </Link>
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
    backgroundImage: 'url(https://source.unsplash.com/random)',

  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // paper: {
  //   backgroundImage: 'url(https://source.unsplash.com/random)',
  //   marginTop: theme.spacing(0),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // backgroundImage: 'url(https://source.unsplash.com/random)',

  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
<div>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             <Index  HeaderImage="HIIiiiigirls"/>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link  to="/" variant="body2" className="appLink">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className="appLink" to="/SignUp" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
             <Help Help="have you neeed myyy help"/> 
            </Box>
           
          </div>
        </div>
      </Grid>
    </Grid>



</div> 
  );
}