import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'


const reducer = (state, action) => {
    console.log(state, action);
    switch(action) {
        case "Up":
            return state + 1;
        case "Down":
            return state -1;
        case "Reset":
            return 0;
    }
    return state;
};

const Counter = () => {

    // const [count, setCount] = useState(0);



    // const handleUp = () => {
    //     setCount(count + 1);
    // }

    // const handleDown = () => {
    //     setCount(count - 1);
    // }

    // const handleReset = () => {
    //     setCount(0);
    // }

    
    const [count, dispath] = useReducer(reducer,0); //dispath mang giá trị action tới reducer để xử lý ở trên, 0 là giá trị mặc định


  return (
    <>
        <div>Kết quả {count}</div>
        <button onClick={ () => dispath("Up")}>Up</button>
        <button onClick={ () => dispath("Down")}>Down</button>
        <button onClick={ () => dispath("Reset")}>Reset</button>
    </>
  )
}

export default Counter