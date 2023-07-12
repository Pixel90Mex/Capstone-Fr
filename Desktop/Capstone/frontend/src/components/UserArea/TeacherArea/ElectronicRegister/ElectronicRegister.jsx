import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FirstQuarter from './FirstQuarter'
import SecondQuarter from './SecondQuarter'

const ElectronicRegister = () => {
    return (
        <>
            <div>Registro</div>
            <Container>
                <Row>
                    <Col>
                        <FirstQuarter />
                    </Col>
                    <Col>
                        <SecondQuarter />
                    </Col>
                    <Col>
                        <Button>Prospetto Voti</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ElectronicRegister