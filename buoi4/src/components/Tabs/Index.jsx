import React, { useEffect, useState } from 'react'
import './Tabs.scss'
const Index = () => {

    const[data, setData] = useState([]);

    const [tabActive, setTabActive] = useState("products");

    useEffect(() => {
        fetch(`https://dummyjson.com/${tabActive}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.posts);
            setData(data[tabActive]);
        })
    },[tabActive])

    console.log(data);

    const handleChangeTable = (e) => {
        console.log(e);
        setTabActive(e);
    }

  return (
    <>
        <div className='tabs'>
            <div onClick={() => handleChangeTable("products")} className='tabs__item'>Products</div>
            <div onClick={() => handleChangeTable("users")} className='tabs__item'>User</div>
            <div onClick={() => handleChangeTable("posts")} className='tabs__item'>Post</div>
        </div>

        <div className='tabs__content'>
            <ul>
                {(data || []).map((item, index) => (
                    <li key={index}>{item.title || `${item.firstName} ${item.lastName}`}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Index