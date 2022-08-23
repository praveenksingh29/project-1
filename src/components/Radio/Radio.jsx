import React from 'react';
import "./Radio.css";

const Radio = (props) => {

    const {label, selectRadio, setSelectRadio, roleOption} = props;
    
  return (
    <div className='radio'>
      {label && <span className='radio-label'>{label}</span>}
      <div className="radio-component">
        {roleOption.map((item, index)=>{
            return(
                <div
                className={selectRadio === index ? 'activeRadio': 'radioItem'}
                key={index}
                onClick={()=> setSelectRadio(index)}>
                    <img className='radio-icon' src={item.icon} alt="" />    
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Radio
