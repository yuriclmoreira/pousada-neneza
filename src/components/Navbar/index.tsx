import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./styles.css"
import logo from "./logo.jpg";
const Navigation = () => (
    <div>

        <Navbar fixed="top" expand="lg" variant="" className="navbar">
            <Container>

                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="50"

                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="rotes" id="basic-navbar-nav" >

                    <div>

                        <Nav className="navlink">
                            <Nav.Link className="navbarlink" href="/">Página Principal</Nav.Link>
                            <Nav.Link className="navbarlink" href="/acomodacoes">Acomodações</Nav.Link>
                            <Nav.Link className="navbarlink" href="/galeria">Galeria</Nav.Link>
                            <Nav.Link className="navbarlink" href="/eventos">Eventos</Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    </div>
)

export default Navigation;