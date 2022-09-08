import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const onAdd = (cantidad) =>{
        console.log("Compraste " +cantidad+ " unidades");
    }


    const tacos = [
        {id:1, imagen: "../../media/tacosdetrompo.jpg", nombre: "Tacos de Trompo", ingredientes:"Carne de Cerdo (Trompo), tortilla de maíz, queso (opcional)"},
        {id:2, imagen: "../../media/tacosdebistec.jpeg", nombre: "Tacos de Bistec", ingredientes:"Carne de Res (Bistec), tortilla de maíz, queso (opcional)"},
        {id:3, imagen: "../../media/gringa.jpeg", nombre: "Gringa", ingredientes:"Carne de Cerdo (Trompo), tortilla de harina, queso"},
        {id:4, imagen: "../../media/pirata.jpg", nombre: "Pirata", ingredientes:"Carne de Res (Bistec), tortilla de harina, queso"},
        {id:5, imagen: "../../media/campechana.PNG", nombre: "Campechana", ingredientes:"Mezcla Bistec y Pastor, tortilla de harina, queso"},
        {id:6, imagen: "../../media/alambre.jpg", nombre: "Alambre", ingredientes:"Carne de Res (Bistec),pimientos, cebolla, queso, tortillas de maíz aparte"},
    ];

    const [info, setInfo] = useState({});

    useEffect(() => {
        const getInfo = new Promise (resolve => {
            setTimeout(() => {
                resolve(tacos);
            },3000);
        });
        getInfo.then(res => setInfo(res));
    },[]);

    return(
        <div>
            <h2 className="display-1 text-center">{props.titulo}</h2>
            <h3 className="display-4 text-center">{props.slogan}</h3>
            <hr />  
            <ItemCount numInit={1} stock={99} onAdd={onAdd} />
            <ItemList info={info} />
        </div>
        
    )
}

export default ItemListContainer;