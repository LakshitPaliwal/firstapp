import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import slideImage1 from '../../media/allimages/slideImage1.png';
import slideImage2 from '../../media/allimages/slideImage2.png';
import slideImage3 from '../../media/allimages/slideImage3.png';
import slideImage4 from '../../media/allimages/slideImage4.png';
import slideImage5 from '../../media/allimages/slideImage5.png';
import '../../App.css';
import Header from '../allheadertypes/Header';
import HeaderText from '../allheadertypes/HeaderText';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';




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
      borderRadius :30,
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
           <Link  to="About">
  <div>
                    {/* <img alt="" src="https://life.spartan.com/wp-content/uploads/2019/07/leanmuscleworkout-main-1200x500.jpg" /> */}
                    <img src={slideImage1}/>
                    <div className={classes.mainFeaturedPostContent} style={{
                          position: 'absolute',
                          color: 'white',
                          top: 10,
                          left: '40%',
                          alignContent:'left',
                          transform: 'translateX(-50%)'
                        }} > 
                        <Typography justifyContent="flex-start" variant="h6" color="inherit" paragraph>
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
</Link>
                <div>
                    <img src={slideImage2} />
                    <div className={classes.mainFeaturedPostContent} style={{
                          position: 'absolute',
                          color: 'white',
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
                    <img src={slideImage3} />
                    <div className={classes.mainFeaturedPostContent} style={{
                          position: 'absolute',
                          color: 'white',
                          top: 10,
                          left: '30%',
                          alignContent:'left',
                          transform: 'translateX(-50%)'
                        }} > 
                        <Typography  justifyContent="flex-start" variant="h6"  color="inherit" paragraph>
                            know  about trademills an5
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

                <div>
                    <img src={slideImage4} />
                    <div className={classes.mainFeaturedPostContent} style={{
                          position: 'absolute',
                          color: 'black',
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

                <div>
                    <img src={slideImage5} />
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