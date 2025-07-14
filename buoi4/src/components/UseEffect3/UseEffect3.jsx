import React, { useEffect, useState } from 'react';
import './Product.scss';

const UseEffect3 = () => {

    const limit = 10;
    const [data, setData] = useState([]);
    const [quantityPage, setQuantityPage] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`) //fetch data from this url
            .then(res => res.json()) // Bước này sẽ lấy dữ liệu từ url trên => chuyển về json
            .then((data) => { //Nhận data json trên gắn vào biến data 
                // console.log(data.products);
                setData(data.products);
                setQuantityPage(Math.ceil(data.total / limit));
            })
    }, [page]); // truyền vào dependency để so sánh tránh lặp vô tận useEffect render vô số lần
    //Khi mà page thay đổi thì useEffect sẽ render lại trang

    // console.log(quantityPage)
    console.log(...Array(quantityPage));
    //Trường hợp này sẽ tạo ra một mảng rỗng với độ dài là quantityPage
    //Vì vậy phải dùng spread operatoor để chuyển nó thành mảng có giá trị


    const handleClick = (e) => {
        setPage(e);
    }

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

            {/* <ul className='page__list'>
                {[...Array(quantityPage)].map((item, index) => (
                    <li key={index} onClick={() => handleClick(index)}>{index}</li>
                ))}
            </ul> */}

            <ul className='page__list'>
                {[...Array(quantityPage)].map((_, index) => (
                    <li
                        key={index}
                        className={page === index ? 'active' : ''}
                        onClick={() => handleClick(index)}
                    >
                        {index + 1}
                    </li>
                ))}
            </ul>

        </>
    )
}

export default UseEffect3
//Muốn phân trang:
//B1: cần tổng sản phẩm
//B2: Lấy tổng sản phẩm từ API chia cho số lượng muốn hiển thị -> ra số trang