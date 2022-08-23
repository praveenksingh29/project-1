import React, {useState} from 'react';
import { Doublecolumn } from "../../../Data/Data";
import Radio from '../../Radio/Radio';

const DoubleColumn = () => {

    const[selectRadio, setSelectRadio] = useState(Doublecolumn[0]);

  return (
    <div className='double-column'>
        <Radio
        roleOption={Doublecolumn}
        selectRadio={selectRadio}
        setSelectRadio={setSelectRadio}
        label={"Double Column"}
        />
    </div>
  )
}

export default DoubleColumn
