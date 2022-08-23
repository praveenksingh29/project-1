import React, { useState } from 'react';
import "./Dropdown.css";

const Dropdown = (props) =>{

    const {label, selectRatio, setSelectRatio, option} = props;
    const [isOptionsVisible, setIsOpstionVisible] = useState(false);

    const handleSelected=(option)=>{
        setSelectRatio(option)
        setIsOpstionVisible(false);
    }

    return(
        <div className='dropdown'>
            {label && <span className="dropdown-lable">{label}</span>}
            <div className='dropdown-component'>
                <div className='selected-options-wrapper' 
                onClick={()=>setIsOpstionVisible(!isOptionsVisible)}>

                    <div>{selectRatio}</div>
                    {isOptionsVisible ? 
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="icon icon-tabler icon-tabler-chevron-up" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    stroke-width="2" stroke="currentColor" 
                    fill="none" stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" 
                    fill="none"></path>
                    <polyline points="6 15 12 9 18 15"></polyline>
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="icon icon-tabler icon-tabler-chevron-down" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    stroke-width="2" stroke="currentColor" 
                    fill="none" stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    }

                </div>
                {isOptionsVisible && 
                    <div className='dropdown-options'>
                        {option.length>0 && 
                        option.map((option)=>
                        <div className='dropdown-option' onClick={()=>handleSelected(option)}>{option}</div>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}
export default Dropdown;