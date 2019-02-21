import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';

interface NavigationProps {
  onNavigate: (newView: string) => void,
}

interface NavigationState {

}

class Navigation extends Component <NavigationProps, NavigationState> {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Netzalist Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link onSelect={(event: any) => this.props.onNavigate("Student")} href="#student">Student</Nav.Link>
            <Nav.Link onSelect={(event: any) => this.props.onNavigate("Teacher")} href="#teacher">Teacher</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
