import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { fetchOneFromFirestore } from "../utility/firestoreFetch";

const ItemDetailContainer = (props) =>{
    const [info, setInfo] = useState({});
    const { id } = useParams();

    useEffect(() =>{
        fetchOneFromFirestore(id)
        .then(res => setInfo(res))
        .catch(err => console.log(err))
    }, [id]);

    return(
        <ItemDetail data={info} />
    )
};

export default ItemDetailContainer;