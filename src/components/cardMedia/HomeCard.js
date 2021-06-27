import React, { Component } from 'react';
import '../../App.css';
import cardData from './cardData';

import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const useStyles = makeStyles((theme) => ({


  root: {
    // width:'380px',
    // backgroundColor:'#f4f5f7',
    flexGrow: 1,
    marginBottom: theme.spacing(4),
    // margin:'center',
    borderRadius: '5px',
    boxShadow: 'none',
    // transition: 'all 0.3s',
    '&:hover': {
      // backgroundColor: '#ffffff',
      transform: 'scale(1.007)',
      boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
}
)
);


const HomeCard = (props) => {
  const classes = useStyles();

  return (
<>
{/* <Row xs={1} md={6} className="">
  {cardData.map((tile) => (
        <Card>
          <Card.Img variant="top" src={tile.cardImage} />
          <Card.Body>
            <Card.Title> {tile.bText1}  </Card.Title>
            <Card.Text>  {tile.bText2}  </Card.Text>
          </Card.Body>
          <Button size="small" color="primary">
                    {tile.bText3}
            </Button>
            <Button size="small" color="primary">
                    {tile.bText4}
            </Button>
        </Card>
    ))}
  </Row> */}



{/* backgroundColor:'#f4f5f7', */}
  <div style={{ padding: 40 }}>
      {/* <Grid spacing={4}  container
  direction="row"
  justify="center"
  alignItems="center"
 > */}
        <Grid item xs={12} sm={3} >
         <div>
      {cardData.map((tile) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              image={tile.cardImage}
              component="img"
              alt={tile.title}
              height="400"
              title={tile.title}     
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
{/* </Grid> */}
</div>
  </>
  );
}
export default HomeCard;