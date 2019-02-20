import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Exercise from '../Exercise/Exercise';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Exercise />
      </div>
    );
  }
}

export default App;
