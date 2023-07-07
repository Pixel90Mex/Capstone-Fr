import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { dataOne, dataTwo } from "../../data/infoFooter"
import "../../style/Footer.css"

const Footer = () => {
    return (
        <Container id="Footer" className="mt-5">
            <Row>
                <Col>
                    <ListGroup className="opacity-75" lg={4}>
                        {
                            dataOne.map((item) => {
                                return (
                                    <ListGroup.Item className="border border-0">{item.title}</ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup className="opacity-75" lg={4}>
                        {
                            dataTwo.map((item) => {
                                return (
                                    <ListGroup.Item className="border border-0">{item.title}</ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;