import React, {useState} from "react";
import "./MainScreen.css";
import screenImage from "../../icons/screenImage.png";
import GutterSlider from "../../components/Slider/Slider";
import {AspectRatio} from "../../Data/Data";
import Dropdown from "../../components/Dropdown/Dropdown";
import Checkbox from "../../components/Checkbox/Checkbox";
const MainScreen = () =>{
    // Gutter Slider
    const [value, setValue] = useState(40);
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    // Aspect-Ratio
    const [selectRatio, setSelectRatio] = useState(AspectRatio[1]);


    return (
        <div className="mainScreen">
            <div className="screen">
                <img src={screenImage} alt="" />
                <hr className="left-line"/>
                <hr className="right-line"/>
                <div className="insideScreen">

                </div>
                <div className="display">
                    
                </div>
            </div>
            <div className="mainScreen-footer">
                <div className="Gutter">
                    <span>Gutter</span>
                    <div className="Gutter-input">
                        <GutterSlider 
                        value={value} 
                        handleChange={handleChange}
                        />
                        <hr/>
                        <span>{value + " Px"}</span>
                    </div>                
                </div>
                <div className="Aspect-ratio">
                    <Dropdown 
                    option={AspectRatio} 
                    selectRatio={selectRatio}
                    setSelectRatio={setSelectRatio}
                    label={"Aspect ratio"}
                    />
                </div>
                <div className="Screen-bounds">
                    <Checkbox label={"Screen bounds"}/>
                </div>
                <div className="Title-safe">
                    <Checkbox label={"Title safe"}/>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;