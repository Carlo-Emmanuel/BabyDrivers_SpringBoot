import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/hotel-svgrepo-com.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="nav-container">
        <div className="brand">
          <img src={logo} className="logo" alt="logo"></img>
          <h1 className="" id="hotel-name">
            Hotel California
          </h1>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"navbar-link hover-underline-animation"}>
              Home
            </NavLink>
            <NavLink
              to="reservation"
              className={"navbar-link hover-underline-animation"}
            >
              Reservation
            </NavLink>
            {/* 
            <Nav.Link
              href="#reservation"
              className={
                activeLink === "reservation"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("reservation")}
            >
              Reservation
            </Nav.Link> */}

            <Nav.Link
              href="#contact"
              className={"navbar-link hover-underline-animation"}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Link to="/managerr" className="vvd">
              <span>Managerial Log In</span>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
