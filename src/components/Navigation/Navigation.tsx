import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Netzalist Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#student">Student</Nav.Link>
            <Nav.Link href="#teacher">Teacher</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
