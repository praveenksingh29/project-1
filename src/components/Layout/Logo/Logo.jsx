import React from 'react';
import "./Logo.css";
import BlockInset from '../BlockInset/BlockInset';
import Margin from '../Margin/Margin';
import Img1 from "../../../icons/Logo/Img-1.png";
import Img2 from "../../../icons/Logo/Img-2.png";
import deleteImg from "../../../icons/Logo/delete.png";
import searchIcon from "../../../icons/searchIcon.png";
import uploadIcon from "../../../icons/upload.png";

const Logo = () => {
  return (
      <div className='Roles-name'>
        <div className='rolename-inside'>
            <div className='alignment'>
                <div className='addImg'>
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img2} alt="" />
                    <img src={deleteImg} alt="" />
                </div>
            </div>
            <div className='alignment'>
                <div className='addImg'>
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img2} alt="" />
                    <img src={deleteImg} alt="" />
                </div>
            </div>
            <div className='alignment'>
                <div className='addRow'>
                  <button> + Add a row </button>
                </div>
            </div>
            <div className='alignment pad-15'>
                <div className='search'>
                  <input className='searchInput' type="text" />
                  <img src={searchIcon} alt="" />
                </div>
                <div className='uploadfile'>
                  <label for="files">Upload a Logo</label>
                  <input type="file" id="files"/>
                  <img src={uploadIcon} alt="" />
                </div>
            </div>
            <div className='alignment pad-15'>
                <div className='addImg'>
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img1} alt="" />
                </div>
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

export default Logo
