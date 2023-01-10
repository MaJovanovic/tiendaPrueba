import React, { useEffect, useState } from 'react';
import Item from './Item';
import catalogo from "./catalogo";
import { useParams, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';




function ItemListContainer() {
  const {categoria}= useParams()
  
  const [items, setItems]= useState([])
  useEffect (() => {
    if (categoria){
    
      setItems (catalogo.filter(item => item.categoria == categoria))
    } else {
      setItems (catalogo)
    }
  }, [categoria]);



  const listarItems= ()=>{

    return (
    <React.Fragment>
      <h1>{categoria}</h1>
        
      {(items.map(c =>(  


        <div class="card-style card card-group" style={{width: "18rem", display: 'flex', flexDirection:'row', justifyContent: 'center' }}>
                      
          <img src={c.imagen} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h2>{c.codigo}</h2>
            <h2>{c.descripcion}</h2>
            <Link  to = {"/item/"+ c.codigo}> <Button variant="primary"> {c.descripcion} </Button>  </Link>
          </div>     

        </div>        
        ))
      )}       
      
    </React.Fragment>
    )
  }


  console.log(catalogo)
  console.log(items)
  return (
    <div>
      <React.Fragment>
      <div>
        {listarItems()}
      </div>
      </React.Fragment>
    </div>
      
  );
}



export default ItemListContainer;