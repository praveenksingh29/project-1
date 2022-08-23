import React, { useState } from 'react';
import './Checkbox.css';
// import { CheckBox } from 'evergreen-ui'

const Checkbox = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const {label} = props;
  return (
    <div className='Check'>
       <label>
            <input type="checkbox" 
            onChange={() => {
            setIsChecked(!isChecked);
            }}/>
            <svg
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            // This element is purely decorative so
            // we hide it for screen readers
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
            >
            <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="3"
            stroke={isChecked ? "#141416" : "none"}
            />
            </svg>
            {label && <span className="Lebel">{label}</span>}
       </label>
        
    </div>
  )
}

export default Checkbox
