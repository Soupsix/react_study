import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const UseRef2 = () => {

    const [inputValue, setInputValue] = useState("");
    const counterReff = useRef(0);
    const inputRef = useRef(0);
    const handleOnChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
        counterReff.current = counterReff.current + 1; //UseRef k làm render lại giao diện
    }

    // console.log(inputValue);
    console.log(counterReff.current);

    useEffect(() => {
        inputRef.current.focus(); //Khi reload lại trang thì tự trỏ chuột vào thẻ input
    })
  return (
    <>
        <input ref={inputRef} value={inputValue} onChange={handleOnChange} type='text' />
    </>
  )
}

export default UseRef2