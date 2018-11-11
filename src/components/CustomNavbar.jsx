import React, { Component } from 'react'
import './CustomNavbar.css';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';


class CustomNavbar extends Component {

  updateActiveKey(){
    const path = this.props.location.pathname;
    if(path === "/"){
      this.activeNavItem = 1;
    } else if(path === "/services"){
      this.activeNavItem = 2;
    } else if(path === "/about"){
      this.activeNavItem = 3;
    } else if(path === "/contact"){
      this.activeNavItem = 4;
    }
  }
  render() {
    this.updateActiveKey();
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
          <Nav activeKey={this.activeNavItem} pullRight>
            <NavItem eventKey={1}componentClass={Link} href="/" to="/">Home</NavItem>
            <NavItem eventKey={2}componentClass={Link} href="/services" to="/services">Services</NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/about" to="/about">About Us</NavItem>
            <NavItem eventKey={4}componentClass={Link} href="/contact" to="/contact">Contact us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(CustomNavbar);
