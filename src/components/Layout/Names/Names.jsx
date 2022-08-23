import React, {useState} from 'react'
import "./Names.css";
import { Name } from "../../../Data/Data";
import Radio from '../../Radio/Radio';
import Checkbox from "../../Checkbox/Checkbox";

const Names = () => {
    const[selectRadio, setSelectRadio] = useState(Name[0]);

  return (
    <div className='names'>
        <div className='alignment name-text'>
            <div className='alignment-text ali-text'>
                <span>Names</span>
            </div>
            <div className="screen-font">
                <Checkbox label={"Screen bounds"}/>
            </div>
            <div >
                <Radio
                roleOption={Name}
                selectRadio={selectRadio}
                setSelectRadio={setSelectRadio}
                />
            </div>
        </div>
       
    </div>
  )
}

export default Names
