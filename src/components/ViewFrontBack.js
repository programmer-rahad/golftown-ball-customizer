import {useState} from 'react';
import './ViewFrontBack.scss';

function ViewFrontBack({product,logo,text}) {
const [showFront,setShowFront] = useState(1);

    return (
        <div className='d-flex align-items-center justify-content-center'>
        <div className="front-back-wrapper">
            <div className='front-back'>
                <img src={product.image} alt="" />
                <div className={`logo align-items-center justify-content-center ${showFront ? 'd-none' : 'd-flex'}`}>
                    <img src={logo} alt="" />
                </div>
                <div className={`text align-items-center justify-content-center ${showFront? 'd-flex' : 'd-none'}`}>
                    <div>
                        <span>{text.first}</span>
                        <span>{text.second}</span>
                        <span>{text.third}</span>
                    </div>
                </div>
            </div>
            <div className="front-back-buttons text-uppercase mt-2 pt-lg-3">
                <button
                onClick={e => {
                    e.currentTarget.nextElementSibling.classList.remove('active');
                    e.currentTarget.classList.add('active');
                    setShowFront(true)
                }}
                className='button active'>
                    VIEW FRONT
                </button>
                <button
                onClick={e => {
                    e.currentTarget.previousElementSibling.classList.remove('active');
                    e.currentTarget.classList.add('active');
                    setShowFront(false)
                }}
                className='button ms-3 ms-lg-4'>
                    VIEW BACK
                </button>
            </div>
        </div>
        </div>
    )
}

export default ViewFrontBack