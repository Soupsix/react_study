import React, { useEffect, useState } from 'react'

const Product = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = () => {
            fetch('http://localhost:3002/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
        }
        fetchApi()
    }, [])
    
    console.log(data)

    return (
        <div className='product__list'>
            <div className='product__item'>
                <div className='product__image'>
                    <img src='' alt='' />
                </div>
                <h4 className='product__title'>Sản phẩm 1</h4>
                <p className='product__price'>500$</p>
                <p className='product__discount'>500$</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Product