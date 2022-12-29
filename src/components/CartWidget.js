import { MdShoppingCart } from 'react-icons/md';
import { useContext } from "react";
import { CartContext } from './CartContext';
import styles from "./CartWidget.module.css";

const CartWidget = () =>{
    const { calcItemsQty } = useContext(CartContext);
    
    return(
        <button className={styles.cartButton} >Carrito: <MdShoppingCart /> {calcItemsQty()}</button>
    )
};

export default CartWidget;