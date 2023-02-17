import React from 'react';
import { Link } from 'react-router-dom';
import './Steps.scss';

function Steps({currentStep,event}) { 
    return (
        <div className="d-flex step-wrapper align-items-center justify-content-between">
            <h2 className='text-white font-secondary text-bold'>
                GOLF BALL 
                <br className='d-lg-none' />   
                  {' '} CUSTOMIZER
            </h2>
            <div className="steps border-horizontal-middle">
                <Link onClick={() => event(1)} className={currentStep === 1 ?'active' : ''} to="/">
                    <span>
                        1
                    </span>
                    <span>
                        Select
                    </span>
                    <span>
                        Ball
                    </span>
                </Link>
                <Link onClick={() => event(2)} className={currentStep === 2 ?'active' : ''} to="step-2">
                    <span>
                        2
                    </span>
                    <span>

                        Customize
                    </span>
                    <span>
                        Design
                    </span>
                </Link>
                <Link onClick={() => event(3)} className={currentStep === 3 ?'active' : ''} to="step-3">
                    <span>
                        3
                    </span>
                    <span>
                        Complete
                    </span>
                    <span>Order</span>
                </Link>
            </div>
        </div>
    )
}

export default Steps