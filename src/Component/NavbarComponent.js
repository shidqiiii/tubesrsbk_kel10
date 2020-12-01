import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import logo from '../Component/Images/logo.png';

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}Kelompok 10</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/profile">Profile</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavDropdown title="Login" id="basic-nav-dropdown" className="ml-auto">
                            <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Guest</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavbarComponent
