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
                    picItem: item.pictureUrl,
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

    //Calculo del subtotal de cada articulo:
    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].qtyItem;
    };
    // Calculo total de la compra:
    const calcTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    };
    //Calculo para que no se repitan los items
    const calcItemsQty = () => {
        let cantidad = 0;
        cartList.forEach((item) => cantidad = cantidad + item.qtyItem);
        return cantidad;
    };

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, calcItemsQty, calcTotalPerItem, calcTotal }}>
            { children }
        </CartContext.Provider>

    )
};

export default CartContextProvider;