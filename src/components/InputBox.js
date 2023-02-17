import './InputBox.scss';
import { useState } from 'react';

function InputBox({ name,label, value,event }) {
    const [required, setRequired] = useState(false);
    return (
        <div className={`input-box ${required ? 'error' : ''}`}>
            <label className='text-bold text-uppercase' htmlFor="first-name">
                {label}
            </label>
            <input name={name} onChange={event} className='w-100' type="text" value={value} />
        </div>
    )
}

export default InputBox