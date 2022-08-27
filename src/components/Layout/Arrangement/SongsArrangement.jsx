import React from 'react';
import IncrementingButton from "../../../components/IncrementingButton/IncrementingButton";

const SongsArrangement = () => {
  return (
    <div>
      <div className='alignment'>
            <div className='alignment-text'>
                <span>Arrangement</span>
            </div>
            <div className='colmn-number'>
                <IncrementingButton label={"Column(s)"}/>
            </div>
        </div>
    </div>
  )
}

export default SongsArrangement
