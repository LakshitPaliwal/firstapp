import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
// import {Link} from 'react-router-dom';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import fear from './fear.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    //backgroundColor: theme.palette.background.paper,
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    marginBottom: theme.spacing(2),
    borderRadius: '3px'

  },
  
}));
const equipmentList=[
  {name1:""},
  {name2:""},
  {name3:""},
  {name4:""},
  {name5:""},
  {name6:""},
  {name7:""},
]  


const OnImageList=(props)=> {
  const classes = useStyles();
 
  return (
  
  <Container >
    <List 
      subheader={
        
          <ListSubheader> 
        <h1>  On your time, on your equipment.</h1>
        </ListSubheader>
        }  
      className={classes.root}
    >

      <ListItem button>
        <ListItemIcon>
          <img style={{backgroundColor:'#f4f5f7' }} src={fear} />
        </ListItemIcon>
        <ListItemText primary={props.name1} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={props.name2} />
      </ListItem>
      
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={props.name3} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={props.name4} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={props.name5} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={props.name6} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={props.name7} />
      </ListItem>
     
    </List>
 </Container>

 
  );
}


export default OnImageList;
