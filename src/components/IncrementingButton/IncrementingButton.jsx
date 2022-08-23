import React, { useState } from 'react'
import "./IncrementingButton.css";

const IncrementingButton = (props) => {
    const {label, valuetype} = props;
    const [num, setNum] = useState(0);

    const incNum = () =>{
        setNum(num+1);
    }
    const decNum = () =>{
        if(num>0){
            setNum(num-1);
        }else{
            setNum(0);
        }
        
    }
  return (
    <div className='main-div'>
      {label && <span className="Lebel">{label}</span>}
      <div className='btn-div'>
        <div className='main-btn'>
            <div onClick={incNum} className="top-btn">
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
            </div>
            <div onClick={decNum} className="down-btn">
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-chevron-down" 
                width="24" height="24" viewBox="0 0 24 24" 
                stroke-width="2" stroke="currentColor" 
                fill="none" stroke-linecap="round" 
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        </div>
        <span>{num}{valuetype && <span className="value">{valuetype}</span>}</span>
      </div>
    </div>
  )
}

export default IncrementingButton;
