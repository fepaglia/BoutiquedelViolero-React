import Loading from "../utility/Loading";
import Item from "./Item";

const ItemList = ({ data }) => {
    return(
        <>{     //Ternario, mientras carga muestra el Spinner
            data.length > 0 ?
            data.map(product => 
            <Item 
            key={product.id}
            id= {product.id}
            pictureUrl={product.pictureUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            />) : <Loading />
        }
        </>
    )
};

export default ItemList;