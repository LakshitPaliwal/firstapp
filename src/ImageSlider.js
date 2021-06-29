import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import slideImage1 from './slideImage1.png';
import slideImage2 from './slideImage2.png';
import slideImage3 from './slideImage3.png';
import './App.css';
import Header from './Header';
import HeaderText from './HeaderText';




const useStyles = makeStyles( (theme)=>({
  
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]:
          {
            padding: theme.spacing(6),
            paddingRight: 0,
          },
      },
    root:{
      marginBottom: theme.spacing(4),
      maxWidth:'100%',
      }
    }
  )
);
    
const ImageSlider =(props)=>{
    const classes = useStyles();
return (
        <Container boxShadow={2} className={classes.root} > 
           <Carousel infiniteLoop={true}  showArrows={false} showThumbs={false} autoPlay >
           {/* axis="vertical" */}
                <div>
                    <img alt="" src="https://life.spartan.com/wp-content/uploads/2019/07/leanmuscleworkout-main-1200x500.jpg" />
                    {/* <img src={slideImage1}/> */}
                     <div className={classes.mainFeaturedPostContent} style={{
                          position: 'absolute',
                          color: 'black',
                          top: 10,
                          left: '30%',
                          alignContent:'left',
                          transform: 'translateX(-50%)'
                        }} > 
                        <Typography justifyContent="flex-start" variant="h6" color="inherit" paragraph>
                            know more about trademills and
                             how to run on it .
                             with a better posture 
                        </Typography> 

                        <Link className="appLink">  
                            <Button to="/" color="primary">
                                click to more...
                            </Button>
                        </Link>  
                    </div>
  
                </div>

                <div>
                    <img src={slideImage2} />
                </div>

                <div>
                    <img src={slideImage3} />
                     <div className={classes.mainFeaturedPostContent} style={{
                          position: 'absolute',
                          color: 'black',
                          top: 10,
                          left: '30%',
                          alignContent:'left',
                          transform: 'translateX(-50%)'
                        }} > 
                        <Typography justifyContent="flex-start" variant="h6" color="inherit" paragraph>
                            know more about trademills and
                             how to run on it .
                             with a better posture 
                        </Typography> 

                        <Link className="appLink">  
                            <Button to="/" color="primary">
                                click to more...
                            </Button>
                        </Link>  
                    </div>
                </div>

                <div>
                    <img src={slideImage1} />
                    <div className={classes.mainFeaturedPostContent} style={{
                          position: 'absolute',
                          color: 'white',
                          top: 10,
                          left: '30%',
                          alignContent:'left',
                          transform: 'translateX(-50%)'
                        }} > 
                        <Typography  justifyContent="flex-start" variant="h6"  color="inherit" paragraph>
                            know  about trademills and
                             how to run on it .
                             with a better posture  and know about how to pull weigth more and more,
                             know  about trademills and
                             how to run on it .
                             with a better posture

                        </Typography> 

                        <Link className="appLink">  
                            <Button to="/" color="primary">
                                click to more...
                            </Button>
                        </Link>  
                    </div>

                </div>

                {/* <div >
                     <HeaderText  
                        title=" second machine adjustment"
                        description="manually. iFit's automated adjustments transition seamlessly to match your coach's instructions. You'll spend less time fussing and more time focusing on your workout."
                        linkText=" LLLLLLLearn More..."/>
            
                    {/* <img src={slideImage1} /> */}
                {/* </div> */}

                </Carousel> 
             </Container>

        );
    }

export default ImageSlider;
