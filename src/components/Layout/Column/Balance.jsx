import React, {useState} from 'react';
import { BalanceCol } from "../../../Data/Data";
import Radio from '../../Radio/Radio';

const Balance = () => {
    const[selectRadio, setSelectRadio] = useState(BalanceCol[0]);
  return (
    <div>
      <Radio
            roleOption={BalanceCol}
            selectRadio={selectRadio}
            setSelectRadio={setSelectRadio}
            label={"Balance"}
            />
    </div>
  )
}

export default Balance
