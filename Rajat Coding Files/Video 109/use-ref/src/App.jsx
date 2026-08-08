import { useState , useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
   console.log(`First use case`)

   
  })
  

  return (
    <>
     <input ref={ref} type="text" />
     <button onClick={()=>{Inputref.current.focus}}>focus the input</button>
     
    </>
  )
}

export default App
