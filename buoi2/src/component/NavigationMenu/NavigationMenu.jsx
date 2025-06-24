import React from 'react'

export const NavigationMenu = () => {


  const handleOnClick = (event) => {
    console.log('Button clicked!');
    // console.log(event);
  }

  const handleOnChange = (event) => {
    console.log(event.target.value);
  }

  const handleOnFocus = (event) => {
    console.log(event.target.classList.add("input--active"));
  }

  const handleOnBlur = (event) => {
    console.log(event.target.classList.remove("input--active"));
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form (tải lại trang)
    console.log(event.target[0].value); // Lấy giá trị của input đầu tiên trong form
  }

  return (
    <>
      <div className='box'>
        <div className='box'>NavigationMenu</div>
        <button onClick={handleOnClick}>Click me</button>
        <label>Quantity: </label>
        <input type="text" onChange={handleOnChange} placeholder="Type something..." defaultValue={1} onFocus={handleOnFocus} onBlur={handleOnBlur} />

      </div>

      <div className='box'>
        <div className='box'>NavigationMenu</div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input type="text" onChange={handleOnChange} placeholder="Type something..."
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
            <button onClick={handleOnClick}>Submit</button>
          </div>
        </form>
      </div>
    </>

  )
}
export default NavigationMenu

//OnClick là sự kiện được gọi khi người dùng click vào button
//OnChange là sự kiện được gọi khi người dùng thay đổi giá trị của input
//OnFocus là sự kiện được gọi khi người dùng focus vào input
//OnBlur là sự kiện được gọi khi người dùng blur khỏi input
//OnMouseOver là sự kiện được gọi khi người dùng di chuột vào element
//SPA (Single Page Application) là ứng dụng web chỉ có một trang duy nhất, không cần tải lại trang khi người dùng tương tác với ứng dụng. React là một thư viện JavaScript phổ biến để xây dựng SPA.