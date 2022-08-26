import React from 'react'
import Columns from './Columns';
import Paragraph from './Paragraph';

const NameonlyArrangement = () => {
  return (
    <div>
    <div className='alignment'>
        <div className='alignment-text'>
            <span>Arrangement</span>
        </div>
        <Columns/>
    </div>
    <div className='ragged-gutter'>
        <Paragraph/>
    </div>
    </div>
  )
}

export default NameonlyArrangement
