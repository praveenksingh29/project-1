import React from 'react';
import "./head.css";
import User from "../../icons/user.png";
import Settings from "../../icons/settings.png";

const head = () => {
  return (
    <div className='main-head'>
      <div className='logo'>
        <span>Logo</span>
      </div>
      <div className='project-title'>
        <span>Project title</span>
      </div>
      <div className='head-icon'>
        <div>
            <img src={Settings} alt="" />
            <img src={User} alt="" />
        </div>
      </div>
    </div>
  )
}

export default head
