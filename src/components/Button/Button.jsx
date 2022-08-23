import React from "react";
import "./Button.css";

const Style = [
    "btn--solid",
    "btn--outline",
    "btn--icon-outline",
]
const Size = [
    "btn--icon-size",
    "btn--size"
]

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
})=>{

    const checkButtonStyle = Style.includes(buttonStyle)
    ? buttonStyle : Style[0];

    const checkButtonSize = Size.includes(buttonSize)
    ? buttonSize : Size[0];

    return (
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick} 
            type={type}
        >
            {children}
        </button>
    )
};

