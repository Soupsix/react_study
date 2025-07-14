import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import UseRef from './components/UseRef/UseRef'
import UseRef2 from './components/UseRef2/UseRef2'
import RandomGift from './components/RandomGift/RandomGift'
import Counter from './components/Counter/Counter'
import ProductSale from './components/ProductSale/ProductSale'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Layout /> */}
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      {/* <RandomGift /> */}
      {/* <Counter /> */}
      <ProductSale />
    </>
  )
}

export default App
