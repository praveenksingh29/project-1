import React, {useState} from 'react';
import Radio from '../../Radio/Radio';
import { alphabetical } from "../../../Data/Data";


const Alphabetical = () => {
    const[selectRadio, setSelectRadio] = useState(alphabetical[0]);
  return (
    <div>
      <Radio
        roleOption={alphabetical}
        selectRadio={selectRadio}
        setSelectRadio={setSelectRadio}
        label={"Alphabetical"}
        />
    </div>
  )
}

export default Alphabetical
