import React, {Component} from 'react';
import './App.css';
import MainImages from './imageSearch/components/MainImages';
import BackToTop from './BackToTop';

class Contact extends Component {
  
  render(){
      return (
      <div className="App">
        <div id="back-to-top-anchor" />
          <MainImages /> 
          
        <BackToTop/>
      </div>
  );
}
}


export default Contact;
