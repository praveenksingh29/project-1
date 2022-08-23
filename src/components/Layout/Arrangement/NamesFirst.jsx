import React, {useState} from 'react';
import { Namesfirst } from '../../../Data/Data';
import Radio from '../../Radio/Radio';

const NamesFirst = () => {
    const[selectRadio, setSelectRadio] = useState(Namesfirst[0]);

  return (
    <div className='double-column'>
    <Radio
        roleOption={Namesfirst}
        selectRadio={selectRadio}
        setSelectRadio={setSelectRadio}
        label={"Double Column"}
        />
    </div>
  )
}

export default NamesFirst
