import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const img = require('../pics/icon-small.png');

const NavComponent: React.FC = () => {
  return (
    <Navbar  bg="white" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            <span>
            <img src={img} alt="this" />
            YelpCamp
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Link to="/login" className="nav-link">
            <span>
              Login
              </span>
            </Link>
            <Button variant="dark" style={{ color: "white" }}>
                Create New Account
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
