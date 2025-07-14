import React, { useEffect, useState } from 'react';
import './Product.scss';

const UseEffect2 = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products") //fetch data from this url
            .then(res => res.json()) // Bước này sẽ lấy dữ liệu từ url trên => chuyển về json
            .then((data) => { //Nhận data json trên gắn vào biến data 
                // console.log(data.products);
                setData(data.products);
            })
    }, []); // truyền vào dependency để so sánh tránh lặp vô tận useEffect render vô số lần

    console.log(data)

    return (
        <>
            <div className='product__list'>
                {data.map((item) => (
                    <div className='product__item' key={item.id}>
                        <div className='product__image'>
                            <img src={item.images} alt='' />
                        </div>
                        <div className='product__title'>
                            {item.title}
                        </div>
                        <div className='product__price'>
                            {item.price}
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default UseEffect2