import React from "react";

const ItemListContainer = (props) => {
    return(
        <div>
            <h2 className="display-1 text-center">{props.titulo}</h2>
            <h3 className="display-4 text-center">{props.slogan}</h3>
            <hr />
        </div>
    )
}

export default ItemListContainer;