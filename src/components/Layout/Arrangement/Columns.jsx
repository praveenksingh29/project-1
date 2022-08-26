import React from 'react';
import "./Columns.css";
import IncrementingButton from "../../../components/IncrementingButton/IncrementingButton";
import Checkbox from "../../Checkbox/Checkbox";

const Columns = () => {

  return (
    <div className='columns'>
       <div className="screen-font">
            <Checkbox label={"Column(s)"}/>
            <IncrementingButton valuetype={"pts"}/>
        </div>
    </div>
  )
}

export default Columns
