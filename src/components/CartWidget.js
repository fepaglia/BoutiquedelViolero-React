import { MdShoppingCart } from 'react-icons/md';
import { useContext } from "react";
import { CartContext } from './CartContext';
import "./CartWidget.css";

const CartWidget = () =>{
    const { calcItemsQty } = useContext(CartContext);
    
    return(
        <button>Carrito: <MdShoppingCart /> {calcItemsQty()}</button>
    )
};

export default CartWidget;