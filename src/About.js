import React, {Component} from 'react';
import './App.css';
import Navmenu from './Navmenu';
// import Button from '@material-ui/core/Button';
import VideoStream from './VideoStream';

class About extends Component {
  render(){
      return (
  <div>
      <div className="App">
          <Navmenu/>
          <h1>About</h1> 
          <h6>
              this is my app in reactJS and
              this is about how to routing and switch the tab. 
          </h6>
          <VideoStream/>

        
      </div>
    </div>
  );
}
}


export default About;
