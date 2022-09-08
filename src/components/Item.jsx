import React from "react";

const Item = ({info}) =>{
    return(
        <a href="" className="taco">
            <img src={info.imagen} alt=""className="tacoImagenes"/>
            <h2>{info.nombre}</h2>
            <p>{info.ingredientes}</p>
        </a>
    );
}

export default Item;