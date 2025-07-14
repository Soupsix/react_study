import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react'
import { useState } from 'react'
import './ProductSale.scss'

const init = {
    products: [],
    loading: true
}

const reducer = (state, action) => {
    // console.log(state, action);
    //State là giá trị của products
    //action là giá trị của dispath là key để đưa về xử lý 
    if (action.type === "SUCCESS") {
        return {
            products: action.products,
            loading: false,
        }
    } else {
        return state;
    }
}

const ProductSale = () => {



    const [data, dispath] = useReducer(reducer, init);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = () => {
            fetch('https://dummyjson.com/products')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.products);
                    // setProducts(data.products);
                    dispath({
                        type: "SUCCESS",
                        products: data.products
                    })
                })
        }
        //Chờ 3s mới fetch API để lấy dữ liệu ra
        setTimeout(() => { //setTimeOut để giả lập việc fetch data từ db trong 3s
            fetchAPI();
        }, 3000);
    }, []);


    //Nếu loading = true thì sẽ ... sau 3s thì false và loading ra sản phẩm 
    return (
        <> 
            {data.loading ? (<>
                <div>Đang lấy sản phẩm</div></>) : (<>
                    <div className='product__list'>
                        {data.products.map((item, index) => (
                            <div className='product__item' key={index}>
                                <img src={item.thumbnail} alt='' className='product__image' />
                                <h3 className='product__title'>{item.title}</h3>
                            </div>
                        ))}

                    </div></>)}
        </>
    );
};

export default ProductSale