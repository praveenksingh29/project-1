import React from 'react';
import "../Rolesname/Rolesname.css";
import BlockInset from '../BlockInset/BlockInset';
import Margin from '../Margin/Margin';
import SongsAlignment from '../Alignment/SongsAlignment';
import SongsArrangement from '../Arrangement/SongsArrangement';
import Columnwidth from '../Columnwidth/Columnwidth';
import NameonlyBalance from '../Balance/NameonlyBalance';
import SongsOrder from '../Ordering/SongsOrder';
const Songs = () => {
  return (
    <div className='Roles-name'>
        <div className='rolename-inside'>
            <div className='alignment'>
            <SongsAlignment/>
            </div>
            <div className='alignment'>
            <SongsArrangement/>
            </div>
            <div className='alignment'>
            <Columnwidth/>
            </div>
            <div className='alignment'>
            <NameonlyBalance/>
            </div>
            <div className='alignment'>
            <SongsOrder/>
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

export default Songs
