import React from 'react' 
import { Link } from 'react-router-dom';

function ModalProduct({id,events,image,brand,title,price,packetImage}) {
    return (
        <div className='col-6'>
            <div className='modal-product product-item'>
                <img src={packetImage} alt="" />
                <h4>{brand}</h4>
                <h3>{title}</h3>
                <p>
                    ${price}
                </p>
                <button className='button red-button' onClick={() => {
                    events.toggleproductChangeModal();
                    events.setCurrentItem(id);
                }}>
                Select Ball
                </button>
            </div>
        </div>
    )
}

export default ModalProduct