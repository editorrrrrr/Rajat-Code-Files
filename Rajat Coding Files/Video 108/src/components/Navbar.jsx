import React, {useEffect} from 'react'

const navbar = ({color}) => {
    useEffect(() => {
      alert("Hey i am red my color is changed")
    }, [color])
    
  return (
    <div>
      hey i am navbar respect me bro and color {color} is this...
    </div>
  )
}

export default navbar
