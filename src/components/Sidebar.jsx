
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CampaignIcon from '@mui/icons-material/Campaign';
import HelpIcon from '@mui/icons-material/Help';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            name:"Nibiru",
            icon:<Avatar alt="Travis Howard" src="/sidebar_avatar_img.svg" onClick={toggle}/>
        },
        {
            name:"Event",
            icon:<CampaignIcon/>
        },
        {
            name:"Help?",
            icon:<HelpIcon/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "70px"}} className="sidebar">
               
               {
                   menuItem.map((item, index)=>(
                       <div key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name} </div>
                       </div>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;