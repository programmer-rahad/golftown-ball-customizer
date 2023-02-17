import React, { useState } from 'react'
import info from './info.svg';

function Product(props) {
    const { events, id, brand, title, text, packetImage } = props;
    const [select, setSelect] = useState(false);
    return (
        <div className="col-6 col-lg-4">
            <div className={`product-item ${select ? 'selected' : ''}`}>
                <div>
                    {
                        !select && <button onClick={setSelect.bind(null, !select)} className='button green-button text-center'>
                            View Description
                        </button>
                    }

                    <img onClick={setSelect.bind(null, false)} src={packetImage} alt="" />
                </div>

                <h4>{brand}</h4>
                <h3>{title}</h3>
                {
                    select && <p>
                        {text}
                    </p>
                }
                <button onClick={events.toggleProductPriceModal} className='info-button d-flex text-black align-items-center'>
                    <img className='me-1 me-sm-2' src={info} alt="" />
                    <span className='ps-1 pt-1'>
                        59.99 <span className='text-green-2'>
                            + Customization
                        </span>
                    </span>
                </button>

                <button onClick={() => {
                    events.setCurrentItem(id);
                    events.changeStep(2);
                }
                } className='button red-button text-center'>
                    Customize
                </button>


            </div>
        </div>

    )
}

export default Product