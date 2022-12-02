import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import logo from '../../src/assets/logoBV.jpg';

const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand as={Link} to="/"> <img src={logo} width="80" alt="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">

                    <NavDropdown.Item as={Link} to="/category/Fender">Fender</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/category/Gibson">Gibson</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/category/PRS">PRS</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/category/Signature">Signature</NavDropdown.Item>

                </NavDropdown>
                </Nav>
                <Nav.Link as={Link} to="/cart"><CartWidget/></Nav.Link>
                
            </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default NavBar;
