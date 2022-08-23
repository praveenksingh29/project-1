import React from 'react';
import "./Rolesname.css";
import Arrangement from "../Arrangement/Arrangement";
import Alignment from '../Alignment/Alignment';
import Column from '../Column/Column';
import Names from '../Names/Names';
import BlockInset from '../BlockInset/BlockInset';
import Margin from '../Margin/Margin';


const Rolesname = () => {
  return (
    <div className='Roles-name'>
      <div className='rolename-inside'>
        <div className='alignment'>
          <Alignment/>
        </div>
        <div className='alignment'>
          <Arrangement/>
        </div>
        <div className='alignment'>
          <Column/>
        </div>
        <div className='alignment'>
          <Names/>
        </div>
        <hr/>
        <div className='alignment'>
          <BlockInset/>
        </div>
        <div className='alignment'>
          <Margin/>
        </div>
      </div>
    </div>
  )
}

export default Rolesname
