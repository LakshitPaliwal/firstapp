import React , {Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
mainFeaturedPostContent: {
      position: 'relative',
      textAlign:'left',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]:
        {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
    },
})
)

const HeaderText = (props) => {
      const classes = useStyles();
      
return(  
<div  className={classes.mainFeaturedPostContent}>   
       <Typography justifyContent="flex-start" component="h3"  variant="h3" color="inherit" gutterBottom>
              {props.title}
        </Typography>
        <Typography justifyContent="flex-start" variant="h6" color="inherit" paragraph>
              {props.description}
        </Typography>    
        <Link className="appLink">  
          <Button to="/" color="primary">
              {props.linkText}
          </Button>
        </Link>
  </div>
     );
    }
export default HeaderText;
    