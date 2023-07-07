import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand className='ps-5' href='/'>EPIC SCHOOL!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', maxWidth:'' }}
                        navbarScroll
                    >
                        <Nav.Link className='ps-5' href="/">Istituto</Nav.Link>
                        <Nav.Link className='ps-5' href="#action3">Circolari</Nav.Link>
                        <Nav.Link className='ps-5' href="#action3">Docenti e personale ATA</Nav.Link>
                        <Nav.Link className='ps-5' href="#action3">Notizie</Nav.Link>
                        <Nav.Link className='ps-5' href="#action3">Contatti</Nav.Link>
                        <NavDropdown className='ps-5' title="Area riservata" id="navbarScrollingDropdown">
                            <NavDropdown.Item href='/Login'>Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Registrazione
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;