import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';


import {BrowserRouter, Route,Switch} from 'react-router-dom';


function App() {
  
      return (
    <BrowserRouter>
      <div className="App">
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/about" component={About} />
           <Route path="/Contact" component={Contact} />
           <Route path="/SignIn" component={SignIn} />
           <Route path="/SignUp" component={SignUp} />


        </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;
