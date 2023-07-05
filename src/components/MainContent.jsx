import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainCard from "./MainCard";
import { mainItems } from "../data/mainItems";

const MainContent = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className='d-flex flex-wrap gap-3' lg={8}>
                        {
                            mainItems.map((item) => {
                                return (
                                    <MainCard
                                    key={item.id}
                                    alt={item.title}
                                    src={item.src}
                                    />
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MainContent;