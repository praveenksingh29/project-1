import React from 'react';
import "./Column.css";
import IncrementingButton from "../../../components/IncrementingButton/IncrementingButton";
import Balance from "./Balance";

const Column = () => {
  return (
    <div>
        <div className='alignment'>
            <div className='alignment-text'>
                <span>Column</span>
            </div>
            <div className='colmn-number'>
                <IncrementingButton label={"Number"}/>
            </div>
        </div>
        <div className='spacing width'>
            <IncrementingButton label={"Width"} valuetype={"%"}/>
        </div>
        <div className='ragged-gutter'>
            <Balance/>
        </div>
    </div>
  )
}

export default Column
