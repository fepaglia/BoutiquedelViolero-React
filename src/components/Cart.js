import { useContext  } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from "../utility/firebaseConfig";

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
        }


        const createOrderInFirestore = async() =>{
            const newOrderRef = doc(collection(db,"orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef;
        };
        createOrderInFirestore()
            .then(result => {alert("su orden esta en camino")
        //Restamos el stock de los productos vendidos:
        ctx.cartList.forEach(async (item) => {
            const itemRef = doc(db, "productos", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });
        //Procesada la orden, vaciamos el carrito:
            ctx.clear()
    })
            .catch(err =>console.log(err));
}
    return(
        <>  
            <div className="d-flex justify-content-center">
                <div>
                <h2>Carrito</h2>
                <button onClick={()=> {ctx.clear()}}>Limpiar todo</button> 

                <Button as={Link} to={"/"}>Seguir Comprando</Button>
                </div>
            </div>
            <div >
                <div>
                    
                    <ul>
                        {
                        ctx.cartList.length === 0
                        ? <p>ESta Vacio</p>
                        : ctx.cartList.map( item => 
                        <li key={item.idItem}>{item.nameItem} - unidades: {item.qtyItem} x u$s {item.priceItem} = Subtotal: {ctx.calcTotalPerItem(item.idItem)} <button onClick={() => ctx.removeItem(item.idItem)}>Remover</button></li>)
                        }
                    </ul>
                </div>
                
                {
                    ctx.cartList.length === 0
                    ? <p className="d-none">Esta Vacio</p>
                    : <aside>
                            <table>
                                <tr>Detalles de tu compra:</tr>
                                <tr>
                                    <td>Items:</td>
                                    <td>{ctx.calcItemsQty()}</td>
                                </tr>
                                <tr>
                                    <td>Monto Total:</td>
                                    <td>{ctx.calcTotal()} u$s</td>
                                </tr>

                                <tr >
                                    <td><Button onClick={() => {createOrder()}}>Realizar Pedido</Button></td>
                                </tr>

                            </table>
                        </aside>
                }
            </div>
        </>       
    )
};

export default Cart;