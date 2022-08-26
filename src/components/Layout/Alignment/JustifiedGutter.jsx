import React, {useState} from 'react';
import Radio from '../../Radio/Radio';
import { Justifiedgutter } from "../../../Data/Data";


const JustifiedGutter = () => {

    const[selectRadio, setSelectRadio] = useState(Justifiedgutter[0]);

  return (
       <div className='double-column'>
        <Radio
        roleOption={Justifiedgutter}
        selectRadio={selectRadio}
        setSelectRadio={setSelectRadio}
        label={"Justified Gutter"}
        />
    </div>
  )
}

export default JustifiedGutter
