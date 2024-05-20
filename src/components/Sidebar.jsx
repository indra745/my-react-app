
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import CampaignIcon from '@mui/icons-material/Campaign';
import HelpIcon from '@mui/icons-material/Help';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        
        {
            path:"/",
            name:"Event",
            icon:<CampaignIcon/>
        }
        // ,
        // {
        //     path:"/",
        //     name:"Help?",
        //     icon:<HelpIcon/>
        // }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "70px"}} className="sidebar">

           <div   style={{display:"flex", padding:"1rem"}} >
                           <div ><Avatar alt="Travis Howard" src="/sidebar_avatar_img.svg" onClick={toggle}/></div>
                           <div>
                           <div style={{display: isOpen ? "block" : "none", color:"white",marginLeft:"1rem"}} >Nibiru  </div>
                           <div style={{border:"1px solid white", color:"white", borderRadius:"30px",textAlign:"center",marginLeft:"1rem",marginTop:"0.5rem",width:"3rem"}}>owner</div>
                           </div>
                       </div>
               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item?.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name} </div>
                       </NavLink>
                   ))
               }

<NavLink to={"/"}  className="link" activeclassName="active" style={{marginTop:"20rem"}}>
                           <div className="icon"><HelpIcon/></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">Help ?</div>
                       </NavLink>


           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;