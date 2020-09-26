import React,{Component} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderText from './HeaderText';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height:"80vh",
      
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,.9) 25%, transparent 100%)',
    },
  
    })
    )
  

const HeaderImage = (props) => {

    const classes = useStyles();

    return(
      <Paper className={classes.mainFeaturedPost} >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
           <HeaderText title=" Automatic machine adjustment"
            description="Leave behind classes that make you change your settings manually. iFit's automated adjustments transition seamlessly to match your coach's instructions. You'll spend less time fussing and more time focusing on your workout."
            linkText=" Learn More..."/>
       
        </Grid>
      </Grid>
    </Paper>
 );
}

export default HeaderImage;
