import { Avatar, Box } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import CampaignIcon from "@mui/icons-material/Campaign";
import HelpIcon from "@mui/icons-material/Help";
import { Height } from "@mui/icons-material";
import Fab from '@mui/material/Fab';

const Sidebar = ({ children }) => {
    
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Event",
      icon: <CampaignIcon />,
    },
    // ,
    // {
    //     path:"/",
    //     name:"Help?",
    //     icon:<HelpIcon/>
    // }
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
        <div style={{ display: "flex", padding: "1rem", marginTop:"1rem" }}>
          <div>
            <Avatar
              alt="Travis Howard"
              src="/sidebar_avatar_img.svg"
              onClick={toggle}
            />
          </div>
          <div>
            <div
              style={{
                display: isOpen ? "block" : "none",
                color: "white",
                marginLeft: "1rem",
              }}
            >
              Nibiru{" "}
            </div>
            <div
              style={{
                border: "1px solid white",
                color: "white",
                borderRadius: "30px",
                textAlign: "center",
                marginLeft: "1rem",
                marginTop: "0.5rem",
                width: "3rem",
              }}
            >
              owner
            </div>
          </div>
        </div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"1rem" }}>
        <Divider style={{
        border: '1px solid',
        borderImageSource: 'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)',
        borderImageSlice: 1,
        width:"80%",
    
      }}></Divider>
      </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item?.path}
            key={index}
            className="link"
            activeclassName="active"
            style={{border: '1px solid',
            borderImageSource: 'linear-gradient(116.48deg, #5A5A5A 1.7%, rgba(99, 99, 99, 0) 85.9%)',
            borderImageSlice: 1,
            borderRadius: '0px',
        }}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}{" "}
            </div>
          </NavLink>
        ))}

        <NavLink
          to={"/"}
          className="link"
          activeclassName="active"
          style={{ marginTop: "13rem" ,flexDirection:"column",gap:"1rem"}}
        >
          <div className="icon">
            <Box style={{background :"white", borderRadius:"10px", width:"1.5rem",height:"1.5rem",padding:"0.1rem"}}>
            <HelpRoundedIcon style={{color:"#2656D6"}}/>
            </Box>
          </div>
          {/* <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Help ?
          </div> */}
          <div>
          <div style={{ display: isOpen ? "block" : "none" }}>Need help?</div>
          <div style={{ display: isOpen ? "block" : "none" }}>Please check our docs</div>
          </div>
          <div style={{ display: isOpen ? "block" : "none", display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Fab variant="extended" style={{background:"white",height:"1.7rem"}}>
        DOCUMENTATION
      </Fab></div>


        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
