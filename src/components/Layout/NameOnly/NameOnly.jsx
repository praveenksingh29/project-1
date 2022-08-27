import React from 'react';
import "../Rolesname/Rolesname.css";
import NameonlyArrangement from '../Arrangement/NameonlyArrangement';
import NameonlyAlignment from '../Alignment/NameonlyAlignment';
import Columnwidth from '../Columnwidth/Columnwidth';
import NameonlyBalance from '../Balance/NameonlyBalance';
import BlockInset from '../BlockInset/BlockInset';
import Margin from '../Margin/Margin';
import Ordering from '../Ordering/Ordering';

const NameOnly = () => {
  return (
        <div className='Roles-name'>
            <div className='rolename-inside'>
                <div className='alignment'>
                <NameonlyAlignment/>
                </div>
                <div className='alignment'>
                <NameonlyArrangement/>
                </div>
                <div className='alignment'>
                <Columnwidth/>
                </div>
                <div className='alignment'>
                <NameonlyBalance/>
                </div>
                <div className='alignment'>
                <Ordering/>
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

export default NameOnly
