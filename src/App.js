import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Navbar>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#">Welcome</a>
				</Navbar.Brand>
			</Navbar.Header>
			<Nav>
				<NavItem eventKey={1} href="#">Home</NavItem>
				<NavItem eventKey={2} href="#">Contact Us</NavItem>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Web Development</MenuItem>
					<MenuItem eventKey={3.2}>App Development</MenuItem>
					<MenuItem eventKey={3.3}>Services</MenuItem>
				</NavDropdown>
			</Nav>
		</Navbar>
      </div>
    );
  }
}

export default App;
