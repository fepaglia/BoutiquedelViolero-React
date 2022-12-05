import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
    return(
        <Card className="ItemDetail">
            <Card.Img className='image' src={data.pictureUrl} />
            <div className="info">
                <Card.Title>{data.title}</Card.Title>
                
                <Card.Text className="texto">
                    <i>Precio: </i><span><strong>{data.price} u$s</strong></span>
                    
                    <hr/>
                    {data.description}
                </Card.Text>
                <Button variant="primary">Anadir al carrito</Button>
            </div>
        </Card>
    )
};

export default ItemDetail;