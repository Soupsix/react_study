import React from 'react'
//rafce

const Login = () => {

    const isLogin = false; // Giả sử là chưa đăng nhập  

  return (
    <>
        {isLogin == true ? (
            <div>Thông tin người dùng, button logout</div>
        ) : (
        <div>Nút đăng nhập, đăng ký</div>
        ) }

        {isLogin && <div>Avatar</div>} 
    </>
  );
};

export default Login