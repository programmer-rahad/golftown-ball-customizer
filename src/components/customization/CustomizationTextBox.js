import React from 'react'

function CustomizationTextBox({text,events:{showAddTextColor}}) {
    return (
        <div className='text-center text-sm-start customization-box text-uppercase'>
            <div className='d-sm-flex justify-content-between'>
                <div>
                    <span className='text-bold'>
                       front customization 1
                    </span>
                    <p>
                        <span>Text:</span> <br />
                        {text.first} <br />
                        {text.second} <br />
                        {text.third}
                    </p>
                </div>
                <div>
                    <button onClick={showAddTextColor} className='button pt-2'>Change</button>
                </div>
            </div>
        </div>
    )
}

export default CustomizationTextBox