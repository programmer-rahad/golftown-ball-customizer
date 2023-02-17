import React from 'react';
import info from './info.svg';

function ItemInfo({ subtitle, title, price, greenText, select }) {
    return (
        <div className={`item-info`}>
            <h4>TITLEIST</h4>
            <h3>Tour Speed</h3>
            {
                select && <p>
                    Titleist Performance Urethane (TPU) combined with a proprietary casing layer, and reformulated core produce an incredible combination of speed and spin to cover any shot, tee to green.
                </p>
            }
            <a href="#" className='d-flex text-black align-items-center'>
                <img className='me-2' src={info} alt="" />
                <span className='ps-1 pt-1'>
                    ${price} <span className='text-green-2'>
                        {greenText}
                    </span>
                </span>
            </a>
        </div>
    )
}

export default ItemInfo