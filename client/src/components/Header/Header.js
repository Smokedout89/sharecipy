import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './svg-logo.png';
import styles from './Header.module.css';

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} className='px-4' to="/">
                <img alt="" src={logo} width="40" height="40" />{' '}shaREcipy
            </Navbar.Brand>



            <Nav className="container-fluid; ms-auto">
                {isAuthenticated && (
                    <h5 className={styles.welcome}>Welcome {username} !</h5>
                )}

                <Nav.Link as={Link} className='px-3' to="/">Home</Nav.Link>
                <Nav.Link as={Link} className='px-3' to="/recipes">Recipes</Nav.Link>

                {!isAuthenticated && (
                    <>
                        <Nav.Link as={Link} className='px-3' to="/login">Login</Nav.Link><Nav.Link as={Link} className='px-3' to="/register">Register</Nav.Link>
                    </>
                )}

                {isAuthenticated && (
                    <>
                        <Nav.Link as={Link} className='px-3' to="/create">Create recipe</Nav.Link>
                        <Nav.Link as={Link} className='px-3' to="/logout">Logout</Nav.Link>
                    </>
                )}

            </Nav>
        </Navbar>
    );
}