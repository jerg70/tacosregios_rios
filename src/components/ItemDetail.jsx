import ItemCount from "./ItemCount";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import 'animate.css';

const ItemDetail = ({item}) => {
    const[cart,setCart] = useState(false);

    const onAdd = (cantidad) =>{
        setCart(true);
    }

    console.log("prueba item detail");
    return(
        <div className="col-lg-3 col-md-6 col-sm-12 card tacoIndividual text-center" style={{width: '18rem'}}>
        <img src={item.pictureurl} className="card-img-top" alt={item.title}/>
        <div className="card-body">
            <h2>{item.title}</h2>
            <p className="card-text">{item.description}</p>
            <h3>${item.price}</h3>
            {cart ? <Link to='/cart'><p className="animate__animated animate__heartBeat animate__repeat-3">Terminar mi Compra</p></Link> 
            : <ItemCount numInit={1} stock={10} onAdd={onAdd}/>}
        </div>
        </div>
    );
}

export default ItemDetail;