import React, { useEffect, useState } from 'react';
import catalogo from "./catalogo";
import { useParams, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartStorage from './CartStorage';




function ItemDetailContainer() {
    console.log('hola')
    const {cosa}= useParams() 

    const [prod, setProd]= useState({})
    useEffect (() => {
        if (cosa){

        setProd (catalogo.find(item => item.codigo === cosa))
        } else {
            setProd ({codigo:"NA",descripcion: "no disponible"})
        }

    }, [prod,cosa]);






    return (
        <React.Fragment>
            <div class="card-style card card-group" style={{width: "18rem", display: 'flex', flexDirection:'row', justifyContent: 'center' }}>                     
                <img src={prod.imagen} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h1>{prod.codigo}</h1>
                    <h1>{prod.descripcion}</h1> 
                    <CartStorage product = {prod}/>
                </div>      
            </div>  
        </React.Fragment>
        
    );
}



export default ItemDetailContainer;