import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import useDecodedSession from '../../../hooks/useDecodedSession';
import StudentList from './StudentList';
//import "../../style/MainCard.css"

const TeacherMainCard = ({ idClass, section }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [singleClass, setSingleClass] = useState(null);
  const decode = useDecodedSession();

  const getClass = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/class/${idClass}?page=${page}&pageSize=${pageSize}`);
      const data = await response.json();
      setSingleClass(data);
      console.log(singleClass);
    } catch (error) {
      console.log(error);
    };
  };
  useEffect(() => {
    getClass()
  }, [page, pageSize]);

  console.log("singleClass", singleClass)
  return (
    <>
      <Card className="bg-dark text-white" key={idClass} style={{ width: '20rem', minHeight: 'fit-content' }}>
        <Card.Img variant="top" src={'https://scorcidimondo.it/wp-content/uploads/2017/07/DSC_0225-min.jpg'} />
        <Card.ImgOverlay>
          <StudentList
            singleClass={singleClass}
            section={section}
          />
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default TeacherMainCard;