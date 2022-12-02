import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../utility/data";
import { customFetch } from "../utility/customFetch";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
const ItemListContainer = (props) =>{
    const [info, setInfo] = useState([]);
    const { id } = useParams()

    useEffect(() =>{

        if (id) {
            customFetch(2000, products.filter(product => product.category === id) )
            .then(response => setInfo(response))
            .catch(error => console.log(error))
        } else {
            customFetch(2000, products)
            .then(response => setInfo(response))
            .catch(error => console.log(error))
        }
    }, [id])


    return(
        <main>
             <ItemList data={info}/>
        </main>
       
    )
};

export default ItemListContainer;