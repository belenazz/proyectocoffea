import { useEffect, useState } from 'react';
import "../assets/css/styles.css"

function Categories() {
    const [categoriesInDb, setCategoriesInDb]= useState({});
    useEffect(()=>{
    fetch("http://localhost:3000/api/products/")
    .then(productos=>productos.json())
    .then(({countByCategories})=>{
        setCategoriesInDb(countByCategories)
    })
    },[])
    return(
    <>
        <div className='categoriesContainer'> 
        <div className='categoriesInDb'>
            <h2>Cantidad total de Categorias </h2>
            <h4 className='productsH4'>{Object.keys(categoriesInDb).length}</h4>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='categoriesInDb'>
            <h2>Cantidad porductos por Categorias </h2>
            <div className='categoriesDetail'>
            {
                Object.keys(categoriesInDb).map((element)=>(
                    <p key={element}>{element}:{categoriesInDb[element]} </p>
                )
                )
            }
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        </div>
    </>
    )
}

export default Categories;