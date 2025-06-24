import React from 'react'
import { BsAirplaneFill, BsApple } from "react-icons/bs";


//cách 1 gọi thẳng tên props 
const Content = ({ number, iphone, isActive }) => {
  // const Content = (props) => {
  // console.log(props.number);
  // console.log(props.iphone);
  //let  name = props.name;
  // cách 2:destructuring từ props
  // const {number, iphone} = props;
  //Trong return k su dung duoc if/else, vì vậy sẽ dùng toán tử 3 ngôi để thay thế
  let mau ="";
  if(isActive) {
    mau = "box-active";
  } else {
    mau = "";
  }

   return (
    <>
      <div className={`box ${mau}`}>
        {number} - {iphone} <BsAirplaneFill style={{fontSize: '24px'}} />
        <BsApple />
      </div>
      {/* <div className={"box " + (isActive ? "box-active" : "")}>
        {number} - {iphone}
      </div> */}
    </>
  )
}

export default Content