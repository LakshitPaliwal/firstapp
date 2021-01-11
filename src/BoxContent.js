import React ,{Component} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( (theme)=>({


root  :{
  flexGrow: 1,
  marginBottom: theme.spacing(4),
  margin:'center',
  borderRadius: '5px',
  boxShadow:'none',
  transition: 'all 0.3s',
  '&:hover': {
    transform: 'scale(1.007)',
    boxShadow:' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
}
}
)
);

const BoxContent=(props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}  >
      <CardActionArea>
        <CardMedia
           //style={ image= `url(${props.cardimage})` }
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image="https://madeasintended.com/wp-content/uploads/2016/10/Made-as-Intended-Tigers-Eye-slider-1200x500.jpg"
          title="Contemplative Reptile"     
          />
         
        <CardContent border={0}>
          <Typography gutterBottom variant="h6" component="h2">
                {props.bText}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {props.bText2}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
                {props.bText3}
        </Button>
        <Button size="small" color="primary">
                {props.bText4}
        </Button>
      </CardActions>
    </Card>
  );
}
export default BoxContent;
