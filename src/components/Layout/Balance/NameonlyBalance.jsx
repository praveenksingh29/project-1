import React, {useState} from 'react';
import { BalanceCol } from "../../../Data/Data";
import Radio from '../../Radio/Radio';


const Balance = () => {

  const[selectRadio, setSelectRadio] = useState(BalanceCol[0]);

  return (
    <div>
        <div className='alignment'>
            <div className='alignment-text'>
                <span>Balance</span>
            </div>
            <div className='double-column'>
                  <Radio
                  roleOption={BalanceCol}
                  selectRadio={selectRadio}
                  setSelectRadio={setSelectRadio}
                  />
            </div>
        </div>
    </div>
  )
}

export default Balance
