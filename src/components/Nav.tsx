import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const img = require('../pics/icon-small.png');
interface Props{
  loggedIn:Boolean,
}
const NavComponent: React.FC<Props> = ({loggedIn}) => {
  const backendUrl = 'https://localhost:5000';
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${backendUrl}/api/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // logout successful
        // remove token from localStorage
        localStorage.removeItem('jwt');
        // Remove token and userId from state
      
        // redirect to /
    
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error logging out', error);
    }
  };
  return (
    <Navbar bg="#191a1a" variant="dark" expand="lg">
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
        <Nav className="me-auto"></Nav>
        <Nav>
          {loggedIn ? (
            // Navigation items for logged-in users
            <>
              <Link to="/dashboard" className="nav-link">
                <span>Dashboard</span>
              </Link>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            // Navigation items for non-logged-in users
            <>
              <Link to="/login" className="nav-link">
                <span>Login</span>
              </Link>
              <Link to="/register">
                <Button variant="dark" style={{ color: "white" }}>
                  Create New Account
                </Button>
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};
export default NavComponent