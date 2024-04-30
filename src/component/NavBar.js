import React from 'react'
import {Navbar, Container, NavbarToggle,Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png"

import "../css/navbar.css"
function NavBar() {
  
  return (
   
    <>
  <Navbar expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <NavDropdown title="Internship programs" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">UI/UX Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Linux Administration
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Front-End (HTML & CSS) </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Product</Nav.Link>
            <Nav.Link >Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar;

