import { useEffect, useState } from "react";
import { customFetch } from "../utility/customFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
const { products } = require("../utility/data");


const ItemDetailContainer = (props) =>{
    const [info, setInfo] = useState({});
    const { id } = useParams();

    useEffect(() =>{
            customFetch(2000, products.find(product => product.id === id))
            .then(response => setInfo(response))
            .catch(error => console.log(error))
    }, [id]);


    return(
        <ItemDetail data={info} />
    )
};

export default ItemDetailContainer;