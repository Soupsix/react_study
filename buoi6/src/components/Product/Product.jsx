import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import CreateProduct from './CreateProduct'

const Product = () => {

    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload(!reload);
    }

    return (
        <>  
            <div style={{fontSize:"50px",fontWeight:"bold"}}>Product List</div>
            <CreateProduct onReload = {handleReload}/>
            <ProductList onReload = {handleReload} />
        </>
    )
}

export default Product