import React from 'react';
import DoubleColumn from './DoubleColumn';
import RaggeDgutter from './RaggeDgutter';
import IncrementingButton from "../../../components/IncrementingButton/IncrementingButton";

const Alignment = () => {
  return (
    <div>
    <div className='alignment'>
        <div className='alignment-text'>
            <span>Alignment</span>
        </div>
        <DoubleColumn/>
    </div>
    <div className='ragged-gutter'>
        <RaggeDgutter/>
    </div>
    <div className='spacing'>
        <IncrementingButton label={"Spacing"} valuetype={"pts"}/>
    </div>
    </div>
  )
}

export default Alignment
