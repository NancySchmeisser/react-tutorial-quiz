import React, { Component } from 'react';
import './Quiz.css';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Exercise from '../Exercise/Exercise';

class Quiz extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Exercise question="1 + 1" onAnswered={(answer: string) => {console.log(answer)}} />
      </div>
    );
  }
}

export default Quiz;
