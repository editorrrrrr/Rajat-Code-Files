import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <div className='hello'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hA1zbRi3Wxw1QqfajHFf0rzYsKwKUvh_LQF1irjuGd6jpCbtARLS5Gl2&s=10" alt="" width="220" style={{border : "2px solid red", display:'flex', justifyContent:"center"}}/>
      <h1>{props.title1}</h1>
      <p>{props.desc1}</p>
    </div>
  )
}

export default Card
