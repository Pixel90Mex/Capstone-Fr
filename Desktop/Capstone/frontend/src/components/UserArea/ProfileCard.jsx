import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'

const ProfileCard = () => {
    return (
        <>
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Col >
                        <Card>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <Image src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/61325188_10211278807886089_6079207078533005312_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yomORzSQZD4AX9rqYku&_nc_ht=scontent-mxp1-1.xx&oh=00_AfC4D8QZKne7vrtfIdkiLKrTnHFBM3jMK57uLJJNMGN6fw&oe=64D4EE8A"
                                        alt="immagine" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <Card.Title tag="h5">Carlo Leone</Card.Title>
                                    <Card.Text>Docente</Card.Text>
                                </div>
                            </div>
                            <Card.Body className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Materie</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <Card.Text className="font-italic mb-1">fisica</Card.Text>
                                        <Card.Text className="font-italic mb-1">testo</Card.Text>
                                        <Card.Text className="font-italic mb-0">testo</Card.Text>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Card.Text className="lead fw-normal mb-0">Altre info</Card.Text>
                                    <Card.Text className="mb-0"><a href="#!" className="text-muted">Altre info</a></Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default ProfileCard