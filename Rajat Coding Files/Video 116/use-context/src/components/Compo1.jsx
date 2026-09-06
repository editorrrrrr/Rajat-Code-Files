import React ,{ useContext } from 'react'
import { counterContext } from '../counter/context'

const Q = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      {counter}
    </div>
  )
}

export default Q