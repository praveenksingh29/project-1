import React, { useState } from "react";
import './Sidebar.css';
import { SidebarData } from "../../Data/Data";
import { Button } from "../Button/Button";
import creditsIcon from "../../icons/button/credits.png";
import reloadIcon from "../../icons/button/reload.png";

const Sidebar = () =>{

    const [selected, setSelected] = useState(0);


    return (
        <div className="Sidebar">
            <div className="SideTop">
                <span>Blocks</span>
            </div>y
            <div className="menu">
                {SidebarData.map((item, index)=>{
                    return(
                        <div 
                            className={selected === index ? 'active': 'menuItem'}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <img className="icon" src={item.icon} alt=""/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className="sideBottom">
                <Button onClick={()=> {console.log("Click Credits Button");}}
                type="button"
                buttonStyle="btn--icon-outline"
                buttonSize="btn--icon-size">
                <img src={creditsIcon} alt=""/>
                Credits
                </Button>

                <Button onClick={()=> {console.log("Click Reload Button");}}
                type="button"
                buttonStyle="btn--icon-outline"
                buttonSize="btn--icon-size">
                <img src={reloadIcon} alt=""/>
                Reload
                </Button>
            </div>

        </div>
    )
}

export default Sidebar;