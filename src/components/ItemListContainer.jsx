import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const onAdd = (cantidad) =>{
        console.log("Compraste " +cantidad+ " unidades");
    }


    const tacos = [
        {id:1, pictureurl: "../../media/tacosdetrompo.jpg", title: "Tacos de Trompo", description:"Carne de Cerdo (Trompo),5 tortilla de maíz, queso (opcional)", price:90},
        {id:2, pictureurl: "../../media/tacosdebistec.jpg", title: "Tacos de Bistec", description:"Carne de Res (Bistec),5 tortilla de maíz, queso (opcional)", price:90},
        {id:3, pictureurl: "../../media/gringa.jpg", title: "Gringa", description:"Carne de Cerdo (Trompo),1 tortilla de harina grande, queso", price:100},
        {id:4, pictureurl: "../../media/pirata.jpg", title: "Pirata", description:"Carne de Res (Bistec),1 tortilla de harina grande, queso", price:100},
        {id:5, pictureurl: "../../media/campechana.png", title: "Campechana", description:"Mezcla Bistec y Pastor,1 tortilla de harina grande, queso", price:120},
        {id:6, pictureurl: "../../media/Alambre.jpg", title: "Alambre", description:"Carne de Res (Bistec) 200grs,pimientos, cebolla, queso, tortillas de maíz aparte", price:150},
    ];

    const [info, setInfo] = useState([]);

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
            <div className="container">
                <div className="row">
                    <ItemList info={info} />
                </div>
            </div>
            </div>

        
    )
}

export default ItemListContainer;