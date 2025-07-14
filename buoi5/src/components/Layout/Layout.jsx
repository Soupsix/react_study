import React from 'react'
import Header from '../Header/Index'
import { createContext } from 'react'
export const menuContex = createContext();

const Layout = () => {

    const menu = ["Home", "About" ,"Contact"]

  return (
    <>
        <menuContex.Provider value={menu}>
            <Header />
        </menuContex.Provider>
        <div>Main</div>
        <div>Footer</div>
    </>
  )
}

export default Layout