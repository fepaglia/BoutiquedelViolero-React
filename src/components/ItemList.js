
import Item from "./Item";

const ItemList = (props) => {
    return(
        <>{
            props.data.map(product => 
            <Item 
            key={product.id}
            id= {product.id}
            pictureUrl={product.pictureUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            />)

        }</>
    )
};

export default ItemList;