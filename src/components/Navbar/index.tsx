import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./styles.css"

const Navigation = () => (
    <Navbar bg="none" expand="lg">
        <Container>

            <Navbar.Brand href="#home">Pousada da Neneza</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="rotes" id="basic-navbar-nav" >


                <Nav  >
                    <Nav.Link href="#home">Página Principal</Nav.Link>
                    <Nav.Link href="#acomodacoes">Acomodações</Nav.Link>
                    <Nav.Link href="#galeria">Galeria</Nav.Link>
                    <Nav.Link href="#galeria">Eventos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
)

export default Navigation;