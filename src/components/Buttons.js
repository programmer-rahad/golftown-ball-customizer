import React from 'react';
import './Buttons.scss'


const buttons = ['red-button','transparent'];

function Button({text,type,onClick}) {
  return (
    <button onClick={onClick} className={`button ${type}`}>{text}</button>
  )
}

export default Button