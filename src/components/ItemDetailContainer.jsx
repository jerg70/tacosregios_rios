import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { tacos } from "./mock/tacos";

const ItemDetailContainer = () => {

    const [item,setItem] = useState({});

/*     useEffect(() => {
        const getProduct = () =>
            new Promise ((res, rej)=>{
                
                const product = tacos.find((prod) => prod.id === 1)
                console.log(tacos);
                setTimeout(()=>{
                    res(product);
                },2500)
                console.log("entra al useEffect");
            });

            getProduct()
            .then((info)=>{
                setItem(info);
            })
            .catch((error)=>{
                console.log(error);
            }) */

            useEffect(() => {
                const getProduct = new Promise (resolve => {

                    const product = tacos.find((prod) => prod.id === 1)
                    setTimeout(() => {
                        resolve(product);
                    },2000);
                });
                getProduct.then(info => setItem(info));
            },[]);

    return(
        <div className="text-center">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;