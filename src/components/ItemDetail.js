import Card from 'react-bootstrap/Card';
import "./ItemDetail.css";
import Loading from '../utility/Loading';
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ data }) => {
    const [itemCount, setItemCount] = useState(0);

    const ctx = useContext(CartContext);

    const onAdd = (qty) => {
        if(qty > 0){
            setItemCount(qty);
            ctx.addItem(data, qty);
        }
    }

    return(
        <>
        {
        data && data.pictureUrl ?
            <Card className="ItemDetail">
                <Card.Img className='image' src={data.pictureUrl} />
                <div className="info">
                    <Card.Title>{data.title}</Card.Title>
                    
                    <Card.Text className="texto">
                        <hr/>
                        <i>Precio: </i><span><strong>{data.price} u$s</strong></span> / 
                        <span> Stock: {data.stock}</span>
                        <hr/>
                        {data.description}
                    </Card.Text>
                    {
                        itemCount === 0
                        ? <ItemCount stock={data.stock} initial={itemCount} onAdd={onAdd} />
                        : <Button>CheckOut</Button>  
                    }
                </div>
            </Card>
            : <Loading />
        }           
        </>
    )
};

export default ItemDetail;