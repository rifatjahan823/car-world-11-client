import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/logo/car.png';
import './Header.css'

const Header = () => {
    const [user]=useAuthState(auth)
    const signout = () => {
      signOut(auth);
    };
    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top"className='bg'>
          <Container>
          <Navbar.Brand as={Link} to="/">
            <img src= {logo} height="30px" alt="" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mx-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
               <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                {/* //jodi user thake */}
             {
               user && <>
               <Nav.Link as={Link} to="/addinventory">Addinventory</Nav.Link>
               <Nav.Link as={Link} to="/mannageinventory">MannageInventory</Nav.Link>
               <Nav.Link as={Link} to="/myinventory">MyInventory</Nav.Link>
               </>
             }
            
             </Nav>
             
               <div className='d-flex login'>
             {
               user?
               <Link onClick={signout} as={Link} to="" >Sign Out</Link>
               :
               <Link as={Link} to="/login">Login</Link>
             }
               <Link as={Link} to="/register">Register</Link>
               </div>
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
};

export default Header;