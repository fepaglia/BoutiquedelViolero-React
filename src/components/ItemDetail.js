import Card from 'react-bootstrap/Card';
import styles from "./ItemDetail.module.css";
import Loading from '../utility/Loading';
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

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
            <div className={styles.container}>
                <Card className={styles.ItemDetail}>
                    <Card.Img className={styles.image} src={data.pictureUrl} />
                    <div className={styles.info}>
                        <Card.Title className={styles["card-title"]}>{data.title}</Card.Title>
                        <Card.Text className={styles.texto}>
                            <hr/>
                            <i>Precio: </i><span><strong>{data.price} u$s</strong></span> / 
                            <span> Stock: {data.stock}</span>
                            <hr/>
                            {data.description}
                        </Card.Text>
                        {
                            itemCount === 0
                            ? <ItemCount stock={data.stock} initial={itemCount} onAdd={onAdd} />
                            : <Button className={styles.checkout} variant="success" as={Link} to="/cart">CheckOut</Button>
                        }
                    </div>
                </Card>
            </div>
            : <Loading />
        }           
        </>
    )
};

export default ItemDetail;