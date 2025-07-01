import React from 'react'

const Menu = () => {

    const arrayMenu = [
        "Trang chủ",
        "Sản phảm",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ",
    ];

  return (
    <>
    {/* Nếu đi với ngoặc nhọn phải đi với return */}
        <ul>
            {arrayMenu.map((item, index) => {
                console.log(item, index);
                return<li key={index}>{item}</li>
            })}
        </ul>
        {/* Nếu k đi với ngoặc nhọn thì không cần return */}
        <ul>
            {arrayMenu.forEach((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </>
  )
}

export default Menu

//map trong ReactJS duyệt qua từng phần tử của mảng và trả về phần tử mảng mới
//forEach duyệt qua từng phần tử của mảng nhưng không trả về phần tử mảng mới
//key là một thuộc tính bắt buộc phải có khi render ra một mảng dữ liệu,
//key giúp xác định phần tử nào thay đổi, hay xoá đi 