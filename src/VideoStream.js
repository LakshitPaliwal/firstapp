import React,{Component} from 'react';
import car from './media/allvideos/TayTay.mp4';
class VideoStream extends Component{

    render(){
        return (
    <div>
        <video width="750" height="500" controls >
            <source src={car} type="video/mp4"/>
        </video>
    </div>
    );
  }
  }
  
  
  export default VideoStream;
