import React, {useState} from 'react';
import { Raggedgutter } from "../../../Data/Data";
import Radio from '../../Radio/Radio';

const RaggeDgutter = () => {
    const[selectRadio, setSelectRadio] = useState(Raggedgutter[0]);
  return (
    <div>
       <Radio
            roleOption={Raggedgutter}
            selectRadio={selectRadio}
            setSelectRadio={setSelectRadio}
            label={"Ragged Gutter"}
            />
    </div>
  )
}

export default RaggeDgutter
