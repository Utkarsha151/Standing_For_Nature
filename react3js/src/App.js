import React from 'react';
// import {Link} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './comp/pages/Home';
import About from './comp/pages/About';
import BookingSeat from './comp/pages/BookingSeat';
import SelectedPeople from './comp/pages/SelectedPeople.js';
import AdviceLocation from './comp/pages/AdviceLocation';
import upcomingEvent from './comp/pages/upcomingEvent';
import { BrowserRouter as Router, Route,NavLink } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import {Navbar, Nav} from 'react-bootstrap';


function App() {

  
  return (
    <Router>
    <div className="App">
        <div className="">
            <div className="god">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar fixed="top" collapseOnSelect expand="lg"  bg="dark"  variant="dark">
                <NavLink  ClassName="nav-link" exact to="/">Home</NavLink>  
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavLink  ClassName="nav-link" exact to ="/SelectedPeople">Selected_People_List</NavLink> 
                <NavLink  ClassName="nav-link" exact to="/about">About</NavLink>
                <NavLink ClassName="nav-link"  exact to="/BookingSeat">Booking_Seat</NavLink>
              </Nav>
              
              <Nav>
                <div className="de">
                <NavLink  ClassName="nav-link" exact to="/AdviceLocation">Advice_Location</NavLink>
                <NavLink  ClassName="nav-link" exact to="/upcomingEvent ">Upcoming_Events</NavLink>
              </div>
              </Nav>
    
              </Navbar.Collapse>
              </Navbar>
              </Navbar>
          </div>
      </div>
 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/SelectedPeople" component={SelectedPeople} />
          <Route exact path="/AdviceLocation" component={AdviceLocation}/>
          <Route exat path="/upcomingEvent" component={upcomingEvent }/>
          <Route exat path="/BookingSeat" component={BookingSeat }/>
        </Switch>       
    </div>
    </Router> 
     
  );
}

export default App; 
