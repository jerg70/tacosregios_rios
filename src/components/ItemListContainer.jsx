import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    const onAdd = (cantidad) =>{
        console.log("Compraste " +cantidad+ " unidades");
    }

    return(
        <div>
            <h2 className="display-1 text-center">{props.titulo}</h2>
            <h3 className="display-4 text-center">{props.slogan}</h3>
            <hr />
            
            <ItemCount numInit={1} stock={99} onAdd={onAdd} />
        </div>
        
    )
}

export default ItemListContainer;