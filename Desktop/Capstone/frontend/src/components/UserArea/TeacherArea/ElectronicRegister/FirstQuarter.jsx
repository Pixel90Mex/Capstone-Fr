import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';

const FirstQuarter = () => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Primo Quadrimestre
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>STUDENTE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className='border 1' xs={3} md={3}>
                                ARGOMENTI
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                SCRITTO
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                ORALE
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                MEDIA
                            </Col>
                        </Row>
                        <Row>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea"/>
                                </Form>
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea"/>
                                </Form>
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea"/>
                                </Form>
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea"/>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    <Button variant="secondary">
                            ciao
                        </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FirstQuarter