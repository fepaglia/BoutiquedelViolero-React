
import Item from "./Item";

const ItemList = (props) => {
    return(
        <>{
            props.data.map(product => 
            <Item 
            key={product.id}
            pictureUrl={product.pictureUrl}
            title={product.title}
            price={product.price}
            />)

        }</>
    )
};

export default ItemList;