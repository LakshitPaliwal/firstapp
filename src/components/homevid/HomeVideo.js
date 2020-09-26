import React,{Component} from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderText from '../allheadertypes/HeaderText';
import CardMedia from '@material-ui/core/CardMedia';
import TayTay from '../../media/allvideos/TayTay.mp4'

   
const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      height:"80vh",
     
    },
    overlay: {      
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      // backgroundImage:'url(https://source.unsplash.com/random)',
      background: 'linear-gradient( rgba(0,0,0,.3) 100%, transparent 100%)',
    },
  videoHome:{
    height:'80vh',
    maxWidth:'100%',
  }
    }
    )
    )

const Video = (props) => {
  const classes = useStyles();
      return (
        <video className={classes.videoHome} autoPlay loop muted >
          <source src={TayTay}  type="video/mp4" />
        </video>
       );
    } 


const HomeVideo = (props) => {
    const classes = useStyles();
    return(

  <Paper className={classes.mainFeaturedPost} >
    <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
        <Video className={classes.mainFeaturedPost}  videoUrl={props.videoUrl} type={props.type}/>
         {/* <HeaderText title="lakshit"
            description=" dr f g ft drtfyguh fdrt bghuyt grfdcvh bng ftdfvh bjnu gtfrdc hb iuytr6 f5tvg bhuyt grftvgh bjug frdc uygtfdc fgvhbu ygtfrdc dxfcgbhyftrdcf hbjihun ygtfvdrc f"
            linkText="learn More..."/> */}
                         
        </Grid>
      </Grid>
    </Paper>
    
 );
}

export default HomeVideo;
