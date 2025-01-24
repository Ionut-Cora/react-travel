import React from 'react';
import './NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <Navbar.Brand className='text-light'>
                    <Link to='/' className='text-decoration-none text-light d-flex'>
                        <FontAwesomeIcon icon={faMountainSun} size='xl' className='me-3' />
                        Travel HUB
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 justify-content-center'>
                        <Link to='/' className='nav-link text-light fw-semibold'>Home</Link>
                        <Link to='/holidays' className='nav-link text-light fw-semibold'>Holidays</Link>
                        <Link to='/city-breaks' className='nav-link text-light text-capitalize fw-semibold'>City breaks</Link>
                        <Link to='/destinations' className='nav-link text-light fw-semibold'>Destinations</Link>
                    </Nav>
                    <Button variant='light' className='my-2 my-lg-0'>
                        <Link to='/' className='text-decoration-none text-dark text-capitalize text-nowrap fw-semibold'>Sign in</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;