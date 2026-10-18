import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendering")
  return (
    <div>
      i am {adjective} navbar
      <button onClick={()=>{getAdjective()}}>Change me helo</button>
    </div>
    

  )
}

export default memo(Navbar)
