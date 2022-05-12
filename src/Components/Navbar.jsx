import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import {
  Collapse,
  Navbar,
  Container,
  Nav,
  Button,
  Form,
} from 'react-bootstrap';

function NavbarFunc() {
  return (
    <Navbar className="nav-bar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="nav-brand" href="#home">Empowering Employment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">How it works</Nav.Link>
            <Nav.Link href="#link">Hiring Process</Nav.Link>
            <Nav.Link href="#link">Hire!</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="dark">Login</Button>{' '}
            <Button variant="dark">Admin</Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarFunc;