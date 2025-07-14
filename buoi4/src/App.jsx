import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './components/UseEffect1/UseEffect'
import UseEffect2 from './components/UseEffect2/UseEffect2'
import UseEffect3 from './components/UseEffect3/UseEffect3'
import Index from './components/Tabs/Index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <UseEffect2/> */}
     {/* <UseEffect3 /> */}
     <Index />
    </>
  )
}

export default App
