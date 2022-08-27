import React, { useState } from 'react';
import Radio from '../../Radio/Radio';
import { Justifiedgutter } from "../../../Data/Data";

const SongsRaggedgutter = () => {
    const[selectRadio, setSelectRadio] = useState(Justifiedgutter[0]);
  return (
    <div className='double-column'>
        <Radio
        roleOption={Justifiedgutter}
        selectRadio={selectRadio}
        setSelectRadio={setSelectRadio}
        label={"Ragged Gutter"}
        />
    </div>
  )
}

export default SongsRaggedgutter
