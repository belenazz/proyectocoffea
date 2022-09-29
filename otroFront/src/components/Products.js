import { useEffect, useState } from 'react';

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

    <div>
        <h2>Cantidad total de productos </h2>
        <h4>{productsInDb.length}</h4>
    </div>

    <br/> 
    <br/> 
    <br/> 

    <div>
        <h2>Listado de productos </h2>
        
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

    <div>
        <h2>Último producto creado </h2>
        <h4> ID:{lastProductsInDb.id}</h4>
        <h4> NOMBRE PRODUCTO:{lastProductsInDb.name}</h4>
        <h4> DESCRIPCION PRODUCTO:{lastProductsInDb.description}</h4>
        <h4> ORIGEN DEL PRODUCTO:{lastProductsInDb.origin}</h4>
    </div>

        
    </>
  )
}

export default Products