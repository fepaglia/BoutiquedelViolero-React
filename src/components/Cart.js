import { useContext  } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
//import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
//import { db } from "../utility/firebaseConfig";

const Cart = () =>{

    const ctx = useContext(CartContext);

    return(
        <>
            <h1>Carrito</h1>
            <button onClick={()=> {ctx.clear()}}>Limpiar todo</button> 

            <Link to='/'><button>CONTINUE SHOPPING</button></Link>
           
            <ul>
                {
                    ctx.cartList.length === 0
                    ? <p>ESta Vacio</p>
                    : ctx.cartList.map( item => <li key={item.idItem}>{item.nameItem} - unidades: {item.qtyItem} | u$s {item.priceItem} <button onClick={() => ctx.removeItem(item.idItem)}>Remover</button></li>)

                }
            </ul>
        </>
            
    )
};

export default Cart;