import Card from 'react-bootstrap/Card';

const MainCard = (key, alt, src) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={src} alt={alt} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MainCard;