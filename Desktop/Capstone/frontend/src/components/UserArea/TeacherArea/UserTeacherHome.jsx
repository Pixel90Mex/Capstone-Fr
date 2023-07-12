import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from '../ProfileCard';
import useDecodedSession from '../../../hooks/useDecodedSession';
import TeacherMainCard from './TeacherMainCard';

const UserTeacherHome = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [teacher, setTeacher] = useState(null);
    console.log("teacher", teacher)
    const decode = useDecodedSession();

    const getClasses = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/teacher/${decode.id}?page=${page}&pageSize=${pageSize}`);
            const data = await response.json();
            setTeacher(data);
            
        } catch (error) {
            console.log(error);
        };
    };
    useEffect(() => {
        getClasses() 
    }, [page, pageSize]);

    return (
        <>
            <Container id="MainContent">
                <Row>
                    <Col>
                        <ProfileCard />
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-5 d-flex flex-wrap gap-3' style={{ justifyContent: 'center' }} lg={12}>
                        
                            {
                                teacher && teacher.teacher?.class_group?.classes.map((item) => {
                                    
                                    return(
                                        <TeacherMainCard
                                        idClass={item._id}
                                        section={item.class.section}
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

export default UserTeacherHome