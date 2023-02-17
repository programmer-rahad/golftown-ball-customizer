import React from 'react'

function ColorButton({ changeColor, color, text,active }) {

    return (
        <li onClick={changeColor.bind(null,color)} className={`d-flex ${active}`}>
            <span style={{ background: color }}></span>
            <span className='pt-1 text-uppercase text-bold align-self-center ps-2'>
                {text}
            </span>
        </li>
    )
}

export default ColorButton
