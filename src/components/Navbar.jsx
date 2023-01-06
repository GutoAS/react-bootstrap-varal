import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Group114 from "../assets/Group114.png";

const NavbarSection = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Group114} alt="navi-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll "
          className="d-flex justify-content-end"
        >
          <Nav className="my-2 my-lg-0 " navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <Button variant="primary" size="lg">
            Start a Company
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
