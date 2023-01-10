import React, { useEffect, useState } from 'react';


function CartStorage (props){

    const [product, setProduct]= useState (props.product)
    const [productNumbers, setProductNumbers]= useState ('')
    const [cartItems, setCartItems]= useState({})
    
    //console.log(props)
    /*useEffect(() =>{
         setCartItems (JSON.parse(localStorage.getItem("productsInCart")))
         console.log(cartItems)
    },[])*/

    useEffect(() => {

                // Reviso si el producto existe en el local storage
        setProduct(props.product)
        console.log(product,'producto useEffect')
        let productNumbers = localStorage.getItem("cartNumbers");
        productNumbers = parseInt(productNumbers);

        if (productNumbers) {
            localStorage.setItem("cartNumbers", productNumbers + 1);
            // modifico el contador de productos del carro y lo muestro en el DOM , html
        //    setProductNumbers(productNumbers + 1)
            //    document.querySelector(".cart span").textContent = productNumbers + 1;
        } else {
            localStorage.setItem("cartNumbers", 1);
        //    setProductNumbers ("1")
        //    document.querySelector(".cart span").textContent = 1;
        }

        // ir a agregar el producto al local storage
        //setItems(product);
        



        // Agrego productos al local storage
        
        // leo los productos del carro
        //let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

        if (cartItems != null) {
            
            if (cartItems[product.codigo] == undefined) {

                setCartItems({
                    ...cartItems,
                    [product.codigo]: product,
                })
            }
            // incremento la cantidad del mismo producto comprada
        //    cartItems[product.codigo].inCart += 1;
        } else {

            product.inCart = 1;  
            
            setCartItems({
                [product.codigo]: product,
            })
            /*cartItems = {
                [product.codigo]: product,
            };*/
        }
        // Almaceno el nuevo contenido en el local storage
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
            
    }, [product,cartItems])
    
    return (
        <div>
            <p>{product.codigo}</p>
        </div>
    )
}


export default CartStorage;