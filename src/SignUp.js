import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import './App.css';
import M from 'materialize-css';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

const SignUp=()=> {
  const classes = useStyles()

  const history = useHistory()
  
  const [firstname,setFirstName] = useState("")
  const [lastname,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [mobilenumber,setMobileNumber] = useState("")
  const [password,setPassword] = useState("")
  
  const PostData =()=>{
    fetch("/SignUp",{
      method:"Post",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstname,
        lastname,
        email,
        mobilenumber,
        password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error,classes:"toasterror " })
      }
      else{
        M.toast({html:data.message,classes:"toastmessage " })
        history.push('/')
      }
      
      
    })
  }

  

  return (
<div>
    {/* <h2>Sign Up Form</h2>
    <input required
    type="text"
    placeholder="First Name"
    value={firstname}
    onChange={(e)=>setFirstName(e.target.value)}
    />
    <input
    type="text"
    placeholder="Last Name"
    value={lastname}
    onChange={(e)=>setLastName(e.target.value)}
    />   
    <input
    type="text"
    placeholder="Mobile Number"
    value={mobilenumber}
    onChange={(e)=>setMobileNumber(e.target.value)}
    /> 
       <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
        <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <button onClick={()=>PostData()}>
      SignUp 
    </button>
        <h5>
          <Link to="/SignIn">Already have an account </Link>
        </h5> */}

  <div className={classes.image}>
    <Container component="main" maxWidth="xs">
      <div >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                // autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstname}
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastname"
                // autoComplete="lname"
                value={lastname}
                onChange={(e)=>setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="mobnumber"
                label="Mobile Number"
                type="number"
                id="mobnumber"
                value={mobilenumber}
                onChange={(e)=>setMobileNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Here is my term & conditions ,You have to click."
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>PostData()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link className="appLink" to="SignIn" variant="body2" >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container> 
    </div>

</div>
  );
}

export default SignUp;