import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';

import SwitchBtn from "@material-ui/core/Switch";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

import HappyUser from './HappyUser';

import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamShow from './components/streams/StreamShow';
import Navmenu from './Navmenu';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");

  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);


  return (


    <BrowserRouter>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Navmenu />

        <div className="switchBtn ">
          <NightsStayIcon />
          <SwitchBtn onClick={toggleDarkMode} />
          <WbSunnyIcon mt={2} />
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/HappyUser" component={HappyUser} />
          <Route path="/components/streams/list" component={StreamList} />
          <Route path="/components/streams/create" component={StreamCreate} />
          <Route path="/components/streams/edit" component={StreamEdit} />
          <Route path="/components/streams/delete" component={StreamDelete} />
          <Route path="/components/streams/show" component={StreamShow} />


        </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;