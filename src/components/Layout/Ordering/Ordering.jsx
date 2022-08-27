import React from 'react';
import Columnflow from "./Columnflow";
import Alphabetical from './Alphabetical';

const Ordering = () => {
  return (
    <div>
        <div className='alignment'>
                <div className='alignment-text'>
                    <span>Ordering</span>
                </div>
                <Columnflow/>
        </div>
        <div className='ragged-gutter'>
            <Alphabetical/>
        </div>
    </div>
  )
}

export default Ordering
