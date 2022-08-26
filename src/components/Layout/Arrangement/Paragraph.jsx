import React, {useState} from 'react';
import Checkbox from "../../Checkbox/Checkbox";
import Radio from '../../Radio/Radio';
import { paragraph } from "../../../Data/Data";
import "./Columns.css";

const Paragraph = () => {

    const[selectRadio, setSelectRadio] = useState(paragraph[0]);

  return (
    <div className="paragraph">
        <Checkbox label={"Paragraph"}/>
            
        <Radio
            roleOption={paragraph}
            selectRadio={selectRadio}
            setSelectRadio={setSelectRadio}
            />
    </div>
  )
}

export default Paragraph
