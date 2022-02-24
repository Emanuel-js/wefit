import React from 'react'

import logo from '../assets/logo.png'

import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';


function NavBars() {
  return (
    <div >   
       <Navbar bg="light" expand="lg" fixed="bottom"   className="mt-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="WeFit" width="30"
            className="d-inline-block align-top"
            height="30" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
     
            <Nav.Link href="https://wefitclass.netlify.app">Create Class</Nav.Link>
          </Nav>
          <Nav>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
}

export default NavBars