import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Enter Your Username ")
  const [form, setform] = useState({})
  const handleclick = () => {
    alert("You clicked the button")
  }

  const handleMouseOver = () => {
    alert("You are no longer my friend")
  }

  const handleName = (e)=>{
    setform({...form , [e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click us bro</button>
      </div>

      <button className='mouse' onMouseOver={handleMouseOver}>click our body</button>

    <input type="text" name='email' value={form.email?form.email :""} onChange={handleName} />
    <input type="text" name='phone' value={form.phone?form.phone :""} onChange={handleName} />
    </>
  )
}

export default App
