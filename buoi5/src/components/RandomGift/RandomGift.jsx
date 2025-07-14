import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const RandomGift = () => {

    const gift = ["Xe", "Nhà", "Đất", "Bạc", "Vàng", "Kim Cương", "Đô la", "B52", "Bàn phím", "Iphone"]
    const [random, setRandom] = useState(""); 
    let randomGift = useRef(4); //Dùng useRef để k cho render lại component số lượt quay

    const handleClick = () => {

        if (randomGift.current > 0) {
            const randomAny = Math.floor(Math.random() * 10);
            setRandom(gift[randomAny]); //Set số Random vào setRandom
            randomGift.current -= 1; //ngăn k cho lượt quay dưới 0
            console.log(randomAny);
        }
        else {
            alert("Hết lượt quay rồi cu!");
        }

    }

    return (
        <>
            <button onClick={handleClick}>Click</button>
            <div>Số lượt quay còn lại của bạn: {randomGift.current}</div>
            <div>Bạn đã trúng: {random}</div>
        </>
    )
}

export default RandomGift