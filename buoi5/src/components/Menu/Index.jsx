import React from 'react'
import { menuContex } from '../Layout/Layout'
import { useContext } from 'react'
import MenuSub from '../MenuSub/Index'

const Index = () => {

    const menu = useContext(menuContex);
    console.log(menu);
    
  return (
    <div>
        <ul>
            {menu.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

            <MenuSub />

    </div>
  )
}

export default Index