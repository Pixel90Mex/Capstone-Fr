import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainCard from "./MainCard"
import { mainItems } from "../../../data/mainItems";

const MainContent = () => {
    return (
        <>
            <Container id="MainContent">
                <Row>
                    <Col className='mt-5 mb-5 d-flex flex-wrap gap-5' style={{justifyContent: 'center'}}lg={12}>
                        {
                            mainItems.map((item) => (
                                <MainCard
                                key={item.id}
                                title={item.title}
                                img={item.src}
                                alt={item.alt}
                                />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MainContent;