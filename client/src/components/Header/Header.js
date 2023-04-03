import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './svg-logo.png';

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} className='px-4' to="/">
                <img alt="" src={logo} width="40" height="40" />{' '}shaREcipy
            </Navbar.Brand>

            <Nav className="container-fluid; ms-auto">
                <Nav.Link as={Link} className='px-3' to="/">Home</Nav.Link>
                <Nav.Link as={Link} className='px-3' to="/recipes">Recipes</Nav.Link>
                <Nav.Link as={Link} className='px-3' to="/about">About</Nav.Link>
                <Nav.Link as={Link} className='px-3' to="/login">Login</Nav.Link>
                <Nav.Link as={Link} className='px-3' to="/register">Register</Nav.Link>
                <Nav.Link as={Link} className='px-3' to="/logout">Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}