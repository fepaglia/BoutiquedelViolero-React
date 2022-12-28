import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () =>{
    return(
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <ItemListContainer /> } />
                    <Route path="/category/:id" element={ <ItemListContainer /> } />
                    <Route path="/item/:id" element={ <ItemDetailContainer /> } />
                    <Route path="/cart" element={ <Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
};

export default App;