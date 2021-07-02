import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
//  import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { green } from '@material-ui/core/colors';

import { Nav, Container, Navbar } from 'react-bootstrap';

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: '#cddc39', },
//     secondary: { main: '#cddc39' }
//   },
// });
const Navmenu = () => {
  return (
    // <MuiThemeProvider theme={theme}>
    //   <AppBar position="static">
    //     <div className="navStyle">
    //       <Tabs color="primary" >
    //         <Link className="tabColor" to="/">
    //           <HomeIcon className="homeIcon"
    //             style={{ color: green[500] }} />
    //         </Link>
    //         <Link className="tabColor appLink" to="/Contact"><Tab label="Contact" /></Link>
    //         <Link className="tabColor appLink" to="/About">  <Tab label="About" /></Link>
    //         <Link className="tabColor appLink" to="/SignIn">  <Tab label="SignIn" /></Link>
    //         <Link className="tabColor appLink" to="/components/streams/list">  <Tab label="Video Streams" /></Link>

    //       </Tabs>
    //     </div>
    //   </AppBar>
    // </MuiThemeProvider>



    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <HomeIcon className="homeIcon"
              style={{ color: green[500] }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          <Nav><Link className=" appLink" to="/Contact"><Tab label="Contact" /></Link></Nav>
          <Nav><Link className=" appLink" to="/About">  <Tab label="About" /></Link></Nav>
          <Nav><Link className=" appLink" to="/SignIn"> <Tab label="SignIn" /></Link></Nav>
          <Nav><Link className=" appLink" to="/components/streams/list">  <Tab label="Video Streams" /></Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default Navmenu;
