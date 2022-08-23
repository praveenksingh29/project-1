import React from 'react';
import "./Layout.css";
import PreviousIcon from "../../icons/previous-next/left.png";
import NextIcon from "../../icons/previous-next/right.png";
import Info from "../../icons/previous-next/Info.png";
import Rolesname from './Rolesname/Rolesname';
import { Scrollbars } from "react-custom-scrollbars";
import { Button } from "../Button/Button";

const Layout = () => {
  return (
    <div className='Layout'>
        <div className='Layout-title'>
            <div className='Layout-text'>
                <sapn>Layout</sapn>
                <hr className='Hr'/>
            </div>
            <div className='font-text'>
                <span>Font</span>
                <div>
                <img src={PreviousIcon} alt=""/>
                <img src={NextIcon} alt=""/>
                </div>
            </div>
        </div>
        
        <div className='Layout-screen'>
          <div className='Block-type'>
              <div className='Block-text'>
                <span>Block type</span>
              </div>
              <div className='Block-name'> 
                <span>Roles + Names</span>
                <img src={Info} alt="" />
              </div>
          </div>
          <hr />
          <Scrollbars style={{ width:490, height:450}}>
          <div className='Mainlayout-screen'>
            <Rolesname/>
          </div>
          </Scrollbars>
        </div>
        <div className="Mainbtn">
          <Button onClick={()=> {console.log("Click Credits Button");}}
          type="button"
          buttonStyle="btn--outline"
          buttonSize="btn--size">
          Credits
          </Button>

          <Button onClick={()=> {console.log("Click Reload Button");}}
          type="button"
          buttonStyle="btn--solid"
          buttonSize="btn--size">
          Reload
          </Button>
        </div>
        
    </div>
  )
}

export default Layout
