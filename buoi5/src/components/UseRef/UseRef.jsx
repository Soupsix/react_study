import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';

const UseRef = () => {

    const [count, setCount] = useState(0); //UseState sẽ render lại khi có giá trị thay đổi
    const counterRef = useRef(0); //UseRef được sử dụng để lưu trữ giá trị k bị thay đổi khi render lại
    const ob = { //Object sẽ bị render lại khi giá trị thay đổi
        current: 0
    }


    const handleClick = () => {
        // console.log(e)
        setCount(count + 1);
        counterRef.current += 1;
        ob.current += 1;
    }

    console.log(count);
    console.log(counterRef.current); //current là giá trị hiện tại của ref
    console.log(ob.current);
    return (
        <>
            <div>Giá trị hiện tại: {count} -- {counterRef.current}</div>
            <button onClick={handleClick}>Click</button>
        </>

    )
}

export default UseRef