import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
            <Link to="/"><Navbar.Brand className='ps-5' href="#">SITO DELLA SCUOLA</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='ps-5' href="#action1">Classi associate</Nav.Link>
                        <Nav.Link className='ps-5' href="#action3">Circolari</Nav.Link>
                        <Nav.Link className='ps-5' href="#action3">Messaggi</Nav.Link>
                        <Nav.Link className='ps-5' href="#action3">altro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;