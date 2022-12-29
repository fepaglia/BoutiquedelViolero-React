import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ id, title , price, pictureUrl}) {
  return (
    <Card style={{ width: '18rem' }} className={styles.card}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body className={styles["card-body"]}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>{price} u$s</span> 
        </Card.Text>
        <Button as={Link} to={`/item/${id}`} variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
