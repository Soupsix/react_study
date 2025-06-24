import React from 'react'

const MainContent = () => {
  let css = {
    backgroundColor: 'red',
    color: 'black'
  }

  let myName = 'Nguyễn Văn A';
  return (
    <div className='box' style={css}>
      MainContent {myName}
    </div>
  )
}

export default MainContent