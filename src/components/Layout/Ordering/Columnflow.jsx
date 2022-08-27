import React, {useState} from 'react';
import Radio from '../../Radio/Radio';
import { ColumnFlow } from "../../../Data/Data";

const Columnflow = () => {

    const[selectRadio, setSelectRadio] = useState(ColumnFlow[0]);

    return (
        <div className='double-column'>
        <Radio
        roleOption={ColumnFlow}
        selectRadio={selectRadio}
        setSelectRadio={setSelectRadio}
        label={"Column flow"}
        />
        </div>
    )
}

export default Columnflow
