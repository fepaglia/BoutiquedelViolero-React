import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';


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
        <div>
            <h2>Cantidad</h2>
            <button onClick={sumar}>+</button>
            {
                stock && count
                ? <Button variant="primary" onClick={() => onAdd(count)}>Anadir al carrito</Button>
                : <Button variant="contained" disabled>Sume alguna unidad</Button>
            }
            <button onClick={restar}>-</button>
        </div>
    )
};

export default ItemCount;