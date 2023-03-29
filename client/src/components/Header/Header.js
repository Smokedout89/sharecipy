// import { Link } from 'react-router-dom';
// import styles from './Header.module.css'

// export const Header = () => {
//     return (
//         <div className={styles.div}>
//             <h1 className={styles.h1}><Link className='home' to='/'>Home</Link></h1>
//             <nav>
//                 <Link to='about'>About</Link>
//                 <Link to='recipes'>Recipes</Link>
//                 <Link to='register'>Register</Link>
//                 <Link to='login'>Login</Link>
//             </nav>
//         </div>
//     );
// };

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './svg-logo.png';

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className='px-4' href="/">
                <img alt="" src={logo} width="40" height="40"/>{' '}shaREcipy
            </Navbar.Brand>

            <Nav className="container-fluid; ms-auto">
                <Nav.Link className='px-3' href="/">Home</Nav.Link>
                <Nav.Link className='px-3' href="/recipe">Recipes</Nav.Link>
                <Nav.Link className='px-3' href="/about">About</Nav.Link>
                <Nav.Link className='px-3' href="/login">Login</Nav.Link>
                <Nav.Link className='px-3' href="/register">Register</Nav.Link>
                <Nav.Link className='px-3' href="/logout">Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}