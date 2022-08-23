import React, {useState} from 'react';
import "./BlockInset.css";
import { Blockinset } from "../../../Data/Data";
import Radio from '../../Radio/Radio';

const BlockInset = () => {
    const[selectRadio, setSelectRadio] = useState(Blockinset[0]);

  return (
    <div>
        <div className='alignment'>
            <div className='alignment-text'>
                <span>Block Inset</span>
            </div>
            <div className='double-column'>
                <Radio
                roleOption={Blockinset}
                selectRadio={selectRadio}
                setSelectRadio={setSelectRadio}
                />
            </div>
        </div>
    </div>
  )
}

export default BlockInset
