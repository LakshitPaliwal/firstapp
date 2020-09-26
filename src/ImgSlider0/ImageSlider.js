import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import slideImage1 from './ImgSlider/slideImage1.jpg';
import slideImage2 from './ImgSlider/slideImage2.jpg';
import slideImage3 from './ImgSlider/slideImage3.jpg';


const useStyles = makeStyles( (theme)=>({


    root:{
      marginBottom: theme.spacing(4),
      maxWidth:'100%',
      }
    }
    )
    );
    
const ImageSlider =()=>{
    const classes = useStyles();
return (
 <React.Fragment >       
    <CssBaseline />
        <Container className={classes.root} > 
            <Carousel autoPlay>
                <div>
                <img alt="" src="https://life.spartan.com/wp-content/uploads/2019/07/leanmuscleworkout-main-1200x500.jpg" />
                {/* <img alt="" src="https://api.ellecanada.com/app/uploads/2020/04/Cheap-Home-Gym-Equipment.jpg" /> */}
                    {/* <img src={slideImage1}/> */}
                </div>

                <div>
                    <img src={slideImage2} />
                </div>

                <div>
                    <img src={slideImage3} />
                </div>
                </Carousel>
             </Container>
     </React.Fragment>

        );
    }

export default ImageSlider;