import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    //Agregar un Producto, y que no repita el mismo articulo.
    const addItem = (item , qty ) => {
        const cartItem = cartList.find(product => product.idItem === item.id);

        if (cartItem === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    nameItem: item.title,
                    priceItem: item.price,
                    qtyItem: qty
                }
        ]);            
        }
        else {
            cartItem.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    };

    //Borrar un Item
    const removeItem = (id) =>{
        let removeOne = cartList.filter(item => item.idItem !== id);
        setCartList(removeOne);
    };

    //Vaciar el Carrito
    const clear = () =>{
        setCartList([]);
    };

    

    const calcItemsQty = () => {
        let cantidad = 0
        cartList.forEach((item) => cantidad = cantidad + item.qtyItem)
        return cantidad;
    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, calcItemsQty}}>
            { children }
        </CartContext.Provider>

    )
};

export default CartContextProvider;