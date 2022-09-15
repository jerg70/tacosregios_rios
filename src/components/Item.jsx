import React from "react";
import { Link } from "react-router-dom";

const Item = ({info}) =>{
    return(
<div className="col-lg-3 col-md-6 col-sm-12 card taco">
  <img className="card-img-top" src={info.pictureurl} alt="Imagen de taco"/>
    <div className="card-body text-center">
        <h5 className="card-title">{info.title}</h5>
        <p className="card-text">{info.description}</p>
        <p className="card-text precioLetra">${info.price}</p>
        <Link to={`/detalle/${info.id}`} className="btn btn-primary mx-auto" >Agregar al Carrito</Link>
    </div>
</div>
    );
}

export default Item;    


