import React ,{Component} from 'react';
import '../../App.css';
import cardData from './cardData';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles( (theme)=>({


root  :{ 
  // width:'380px',
  backgroundColor:'#f4f5f7',
  flexGrow: 1,
  marginBottom: theme.spacing(4),
  margin:'center',
  borderRadius: '5px',
  boxShadow:'none',
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor:'#ffffff',
    transform: 'scale(1.007)',
    boxShadow:' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
},
}
)
);


const HomeCard=(props)=> {
  const classes = useStyles();

return (
  <div style={{backgroundColor:'#f4f5f7', padding: 40 }}>
      <Grid spacing={4} container  direction="row" justify="space-evenly" alignItems="center"  >
        <Grid item xs={12} md={3}>
         <div>
      {cardData.map((tile) => (
        <Card className={classes.root}  >
          <CardActionArea>
            <CardMedia
              //style={ image= `url(${props.cardimage})` }
              component="img"
              alt="Contemplative Reptile"
              height="400"
              image="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title="Contemplative Reptile"     
              />
              
            <CardContent border={0}>
              <Typography gutterBottom variant="h6" component="h2">
                  {tile.bText1}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                    {tile.bText2}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary">
                    {tile.bText3}
            </Button>
            <Button size="small" color="primary">
                    {tile.bText4}
            </Button>
          </CardActions>
        </Card>
        ))}
    </div>

    </Grid>
</Grid>
</div>
  );
}
export default HomeCard;