import React, { useState } from 'react'
import "./Margin.css";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { Vertical } from "../../../Data/Data";
import IncrementingButton from "../../IncrementingButton/IncrementingButton"

const Margin = () => {
    const [selectRatio, setSelectRatio] = useState(Vertical[2]);
  return (
    <div>
        <div className='alignment'>
            <div className='alignment-text'>
                <span>Margin</span>
            </div>
            <div className='Vertical-label'>
                <span className='radio-label'>Vertical</span>
            </div>
            <div className='Vertical-drop'>
                <Dropdown 
                option={Vertical} 
                selectRatio={selectRatio}
                setSelectRatio={setSelectRatio}
                />
            </div>
        </div>
        <div className='spacing margin-btm'>
            <IncrementingButton label={"Bottom"} valuetype={" lines"}/>
        </div>
    </div>
  )
}

export default Margin
