import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Modal, Button } from 'react-bootstrap';
import ElectronicRegister from './ElectronicRegister/ElectronicRegister';

const StudentList = ({ singleClass, section }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };

    //chiamata per studente
    const [student, setStudent] = useState(null)


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {section}
            </Button>
            <Modal style={{ width: '18rem' }} show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName="modal-90w"
            >
                <Modal.Body>
                    <Modal.Header>
                        <Modal.Title>Classe</Modal.Title>
                        <Button variant="secondary" onClick={handleClose}>
                            Esci
                        </Button>
                    </Modal.Header>
                    {
                        singleClass && singleClass.SingleClass?.class?.students?.map((item) => {
                            return (
                                <>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item > {item.name + ' ' + item.surname}</ListGroup.Item>
                                    </ListGroup>
                                    <ElectronicRegister 
                                    dataStudents={item.students}
                                    />
                                </>
                            )
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default StudentList