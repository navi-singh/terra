import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
            {/* <Image src={require('../assets/Logo.jpg')} rounded className={"logo"}/> */}
            <h1>IkWish</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/services" to="/services">Services</NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/about" to="/about">About Us</NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/contact" to="/contact">Contact us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
