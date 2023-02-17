import React from 'react';
import logo from './logo.svg';
import './Logo.scss';
function Logo() {
    return (
        <div className='top-logo d-flex align-items-center justify-content-center justify-content-md-start'>
            <img src={logo} />
        </div>
    )
}

export default Logo