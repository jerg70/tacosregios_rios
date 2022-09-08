import Item from "./Item";
import React from "react";

const ItemList = ({info = []}) => {
    return (
        info.map(taco => <Item key={taco.id} info={info} />)
    );
}

export default ItemList;