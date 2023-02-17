import { useState } from 'react';
import logo from './car.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Topbar.scss'

function Topbar() {
    const [showLang, setShowLang] = useState(0)
    return <div className="py-lg-2 topbar text-center bg-green text-white">
        <div className="container">
            <img src={logo} />
            <span className='ps-2 font-secondary'>
                FREE SHIPPING ON ORDERS OVER $99.
            </span>

            <div className="language position-absolute">
                <div className='d-sm-none ms-2'>
                    <FaBars onClick={e => {
                        const blurDOM = e.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
                        blurDOM.classList.toggle('transparent-blur');
                        document.body.classList.toggle('overflow-hidden');
                        setShowLang(!showLang);
                    }} className={`${showLang && 'd-none'}`} />
                    <FaTimes onClick={e => {
                        const blurDOM = e.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
                        blurDOM.classList.toggle('transparent-blur');
                        document.body.classList.toggle('overflow-hidden');
                        setShowLang(!showLang)

                    }} className={`${!showLang && 'd-none'}`} />
                </div>
                <div className={`d-sm-block ${!showLang && 'd-none'}`}>
                    <a className='text-white' href="#">EN</a>&nbsp; | &nbsp;
                    <a className='text-white' href="#">FR</a>
                </div>
            </div>
        </div>
    </div>
}
export default Topbar;  