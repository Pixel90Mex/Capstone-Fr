import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserMainCard from "./UserMainCard";
import { Link } from "react-router-dom";
import { UserMainItems } from "../../data/UserMainItems"

//mettere un click per selezionare la classe e la relativa rotta

const UserHome = () => {
    return (
        <>
            <Container id="MainContent">
                <Row>
                    <Col className='mt-5 d-flex flex-wrap gap-3' style={{ justifyContent: 'center' }} lg={12}>
                        {
                            UserMainItems.map((item) => (
                                <UserMainCard
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
}

export default UserHome;

