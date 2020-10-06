import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';
import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamShow from './components/streams/StreamShow';

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
           <Route path="/components/streams/list" component={StreamList}/>
           <Route path="/components/streams/create" component={StreamCreate}/>
           <Route path="/components/streams/edit" component={StreamEdit}/>
           <Route path="/components/streams/delete" component={StreamDelete}/>
           <Route path="/components/streams/show" component={StreamShow}/>


        </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;
