import React from 'react';
import './App.css';
import Header from './/components/allheadertypes/Header';
import HomeCard from './components/cardMedia/HomeCard';
import HomeVideo from './components/homevid/HomeVideo';
import ImageSlider from './components/imgSlider/ImageSlider';
import Audio1 from './components/sounds/Audio1';
import BackToTop from './BackToTop';
import OnImageList from './OnImageList';
import AvailableOn from './AvailableOn';
import Popupslider from './Popupslider';


const Home =(props)=> {
      return (
      <div className="App" >
      <div id="back-to-top-anchor" />
          <Header/>
         {/* <Container style={{ backgroundColor: '#cfe8fc', height: '10',width:'50' }}>
              <h4>this is home page and made with react js </h4><br></br>
           </Container> */}
     <br></br><br></br>
   
     <Audio1 play/>
     <HomeCard/>
     <HomeVideo/>
     <OnImageList
      name1="INCLINE TRAINERS"
      name2="TREADMILLS"
      name3="STATIONARY BIKES"
      name4="FUSION"
      name5="ELLIPTICALS"
      name6="ROWERS"
      name7="FITNESS GEAR"
      />
      <AvailableOn/>
      <ImageSlider/>
     <BackToTop/>
     <Popupslider/>
      </div>
  );
}


export default Home;