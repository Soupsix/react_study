import React from 'react'
import './App.css'
import Header from './component/Header/header'
import Footer from './component/Footer/footer'
import NavigationMenu from './component/NavigationMenu/NavigationMenu'    
import Content from './component/Content/Content'
import MainContent from './component/MainContent/MainContent'

function App() {

  let css = {
    backgroundColor: 'red',
    color: 'black'
  }

  let myName = 'Nguyễn Văn A';

  

  //Tất cả cú pháp và logic sẽ được viết trong return, Return sẽ trả về 1 giá trị duy nhất
  //Nếu muốn trả về nhiều giá trị thì phải bao bọc trong 1 thẻ
  //Mọi khai báo hay logic phải code trước return 
  //Một thẻ Fragment <></> hoặc <div></div> sẽ bao bọc các thẻ con bên trong
  //Props là một thuộc tính của component, và con k được phép chỉnh sửa props
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className='main'>
        <Content number="Iphone" iphone="12" isActive={false}/>
        <MainContent />
        <Content number="Iphone" iphone="11" isActive={true}/>
      </div>
      <Footer number="1"/>
      <Footer number="2"/>
      {/* <div> */}
        {/* Style inline */}
        {/* <div className="css" style={{ backgroundColor: 'green' }}>Hello React</div> */}
        {/* Cách gọi tên biến */}
        
        {/* <div className="css" style={css}>Hello {myName}</div> */}
      {/* </div> */}
      
      
   </>
  )
}

export default App
