import { useEffect, useState } from 'react';
import "../assets/css/styles.css"

function Products() {
    const [productsInDb, setProductsInDb]= useState([])

    const [lastProductsInDb, setLastProductsInDb]= useState({})
  useEffect(()=>{
    fetch("http://localhost:3000/api/products/")
    .then(productos=>productos.json())
    .then(({products})=>{
      setProductsInDb(products)
      setLastProductsInDb(products[products.length-1])
    })
  },[])

  return(
    <>
    
    <div className='productsContainer'> 

    <div className="productosDb">
        <h2>Cantidad total de productos </h2>
        <h4 className='productsH4'>{productsInDb.length}</h4>
    </div>

    <br/> 
    <br/> 
    <br/> 

    <div className="productosDb">
        <h2>Listado de productos </h2>
        <div className='productsDiv'> 
        <ul> 
            {
                productsInDb.map((p, i)=>{
                    return (
                        
                        <li key={i}>{p.name}</li>

                        
                    )
                })
            }
        </ul>
        </div>

    </div>

    <div className="productosDb">
        <h2>Último producto creado:</h2>
        <div className='lastProduct'>
        <h4> Id: {lastProductsInDb.id}</h4>
        <h4> Producto: {lastProductsInDb.name}</h4>
        <h4> Descripción: {lastProductsInDb.description}</h4>
        <h4> Origen: {lastProductsInDb.origin_id}</h4> 
        </div>
    </div>

    </div>

    <hr ></hr>
        
    </>
  )
}

export default Products