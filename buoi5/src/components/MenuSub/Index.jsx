import React from 'react'
import { menuContex } from '../Layout/Layout'
import { useContext } from 'react'

const Index = () => {

    const menu = useContext(menuContex);
    console.log(`hẹ hẹ`,menu)
  return (
    <div>Index</div>
  )
}

export default Index