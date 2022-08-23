import React from "react";
import "./Slider.css";
const Slider = ({ value, handleChange }) =>{
    return (
        <div>
            <input type="range" defaultValue={value} onChange={handleChange}/>
        </div>
    )
}

export default Slider;