import React, { useEffect } from 'react'

const UseEffect = () => {

    
    //Theo tuần tự js nếu console.log ở đây sẽ trả về một mảng rỗng vì 
    //khi gọi hàm, component chưa được Render ra => k có thẻ li nào cả
    
    //Sử dụng useEffect để fix

    useEffect( () => {
        const listItem = document.querySelectorAll('li');
        console.log(listItem)
    }); 

  return (
    <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
  )
}

export default UseEffect