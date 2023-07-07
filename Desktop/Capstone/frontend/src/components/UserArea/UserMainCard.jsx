import Card from 'react-bootstrap/Card';
import "../../style/MainCard.css"

const UserMainCard = ({key, title, img, alt}) => {
  return (
    <>
      <Card id='MainCard' className="bg-dark text-white" key={key} style={{ width: '20rem', minHeight: 'fit-content' }}>
      <Card.Img src={img} alt={alt}/>
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
    </>
  );
}

export default UserMainCard;