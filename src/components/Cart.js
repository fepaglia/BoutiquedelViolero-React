import { useContext  } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from "../utility/firebaseConfig";
import styles from "./Cart.module.css";
import Swal from 'sweetalert2';

const Cart = () =>{
    const ctx = useContext(CartContext);
    // Conexion de las ordenes de compras con la Base de datos:
    const createOrder = () =>{
    // Informacion Hardcodeada, simulando el input de un formulario:
        const order = {
            buyer: {
                name: "Federico",
                email: "federicopaglia@gmail.com",
                phone: "011422704896"
                },
            date: serverTimestamp(),
            items: ctx.cartList.map(item =>({
                id: item.idItem,
                title:item.nameItem,
                price:item.priceItem,
                qty: item.qtyItem
                })),
            total: ctx.calcTotal()
        };

        const createOrderInFirestore = async() =>{
            const newOrderRef = doc(collection(db,"orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef;
        };
        createOrderInFirestore()
            .then(result => {Swal.fire({
                title: 'Listo!',
                text: 'Estamos procesando tu pedido! \n Pronto tendras un nuevo e-mail, con la confirmacion de tu compra.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })
        //Restamos el stock de los productos vendidos, en la base de batos:
        ctx.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });
        //Procesada la orden, vaciamos el carrito:
        ctx.clear();
        })
            .catch(err =>console.log(err));
}
    return(
        <section>  
            <div className={styles.cabecera}>
                <h2>Carrito</h2>
                <div className={styles.botonera}>
                    <Button  variant="danger" onClick={()=> {ctx.clear()}}>Limpiar todo</Button> 
                    <Button as={Link} to={"/"}>Seguir Comprando</Button>
                </div>
            </div>
            <div className={styles.cartSelection} >
                <div>
                    <ul>
                        {
                        ctx.cartList.length === 0
                        ? <p className={styles.carritoVacio}>El carrito esta vacio... </p>
                        : ctx.cartList.map( item => 
                        <li className={styles.unidad} key={item.idItem}><img className={styles.imgThumbail} src={item.picItem} alt={item.nameItem} />
                            <div> 
                                {item.nameItem} <div>- unidades: <b>{item.qtyItem}</b> x u$s {item.priceItem} = Subtotal:<b> {ctx.calcTotalPerItem(item.idItem)} u$s</b></div>
                                <Button className={styles.eliminarProducto} variant="danger" onClick={() => ctx.removeItem(item.idItem)}>Remover</Button>
                            </div>
                        </li>)
                        }
                    </ul>
                </div>
                
                {
                    ctx.cartList.length === 0
                    ? <p className="d-none">Esta Vacio</p>
                    : <aside>
                            <span className={styles.titulo}>Detalles de tu compra:</span>
                            <ul>
                                <li>Items: <b>{ctx.calcItemsQty()}</b></li>
                                <li>Total a pagar: <b>{ctx.calcTotal()} u$s</b></li>
                                <li>-Envio Gratis-</li>
                            </ul>
                            <Button className={styles.procesarPedido} variant="success" onClick={() => {createOrder()}}>Realizar Pedido</Button>
                        </aside>
                }
            </div>
        </section>       
    )
};

export default Cart;