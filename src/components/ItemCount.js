import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';
import styles from "./ItemCount.module.css";


const ItemCount = ({ stock = 0 , initial = 1 , onAdd }) =>{

    const [count, setCount] = useState(0);

    useEffect(() =>{
        setCount(initial);
    },[initial]);

    const sumar = () =>{
        if (count < stock){
            setCount(count + 1);
        }
    }
    const restar = () =>{
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.cantidades}>
                <button className={styles.sumarestaButton} onClick={sumar}>+</button>
                <p><b>{count}</b> unidad/es</p>
                <button className={styles.sumarestaButton}  onClick={restar}>-</button>
            </div>
            {
                stock && count
                ? <Button variant="primary" onClick={() => onAdd(count)}>Anadir al carrito</Button>
                : <Button variant="contained" disabled>Sume alguna unidad</Button>
            }
        </div>
    )
};

export default ItemCount;