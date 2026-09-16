import React from 'react'
import "./button.css"

const Button = ({text, eventHandler}) => {


  return (
    <div>
        <button className="add-cart-btn" onClick={eventHandler}>
          {text}  
        </button>
    </div>
  )
}

export default Button