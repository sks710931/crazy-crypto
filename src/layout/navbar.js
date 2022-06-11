import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
export const AppBar = (props) => {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="navbar-1"
      variant="dark"
    >
      <Container className="cont">
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Nav className="links">
          <Nav.Link className="link" href="#mint">
            SNOWTRACE
          </Nav.Link>
          <Nav.Link className="link" href="#giveaways">
            GIVEAWAYS
          </Nav.Link>
        </Nav>

        <a
          className="btn button links"
          href="#mint"
        >
          MINT NFT
        </a>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton variant="dark">
            <span></span>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="link" href="#story">
                SNOWTRACE
              </Nav.Link>
              <Nav.Link className="link" href="#giveaways">
                GIVEAWAYS
              </Nav.Link>
              <a
                className="btn button off"
                href="#mint"
              >
                MINT NFT
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
