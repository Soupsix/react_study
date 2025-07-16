import React, { useEffect, useState } from 'react'
import './product.css'
import DeleteProduct from './DeleteProduct';
import EditProduct from './EditProduct';
import { getProducts } from '../../services/productService';

const ProductList = ({onReload}) => {

    const [data, setData] = useState([]);
    const [deleteReload, setDeleteReload] = useState(false);
    const [editReload, setEditReload] = useState(false);
    
    useEffect(() => {
        // const fetchApi = () => {
        //     fetch('http://localhost:3002/products')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data.reverse());
        //     })
        // }

        const fetchApi = async () => {
            const result = await getProducts();
            setData(result.reverse());
        }
        fetchApi()
    }, [deleteReload, onReload, editReload])
    
    const handleReloadDele = () => {
        setDeleteReload(!deleteReload);
    }

    const handleReloadEdit = () => {
        setEditReload(!editReload);
    }

    return (
        
        <div className='product__list'>
            {data.map((item) => (
                <div className='product__item' key={item.id}>
                <div className='product__image'>
                    <img src={item.thumbnail} alt='' />
                </div>
                <h4 className='product__title'>{item.title}</h4>
                <p className='product__price'>{item.price}$</p>
                <p className='product__discount'>{item.discountPercentage}%</p>
                <EditProduct idProduct={item.id} onReload = {handleReloadEdit}/>
                <DeleteProduct idProduct = {item.id} onReload = {handleReloadDele}/>
            </div>
            ))}
        </div>
    )
}

export default ProductList