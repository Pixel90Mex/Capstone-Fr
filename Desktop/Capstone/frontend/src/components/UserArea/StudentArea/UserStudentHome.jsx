import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import UserMainCard from "../TeacherArea/TeacherMainCard";
import ProfileCard from '../ProfileCard';
import useDecodedSession from '../../../hooks/useDecodedSession';

const UserStudentHome = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [student, setStudent] = useState({});
    console.log("student", student);
    const decode = useDecodedSession();

    const getStudent = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/${decode.id}?page=${page}&pageSize=${pageSize}`);
            const data = await response.json();
            setStudent(data);

        } catch (error) {
            console.log(error);
        };
    };
    useEffect(() => {
        getStudent();
    }, [page, pageSize]);

    return (
        <>
            <Container id="MainContent">
                <Row>
                    <Col className='mt-5 d-flex flex-wrap gap-3'>
                        <ProfileCard />
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-5 d-flex flex-wrap gap-3' style={{ justifyContent: 'center' }} lg={12}>
                        {
                            student &&
                            student.school_subjcets?.map((item) => {
                                return (
                                    <UserMainCard
                                        key={item.class._id}
                                        section={item.section}
                                    />
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserStudentHome