import React from "react";
import "../style/TopNav.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import Person2Icon from '@mui/icons-material/Person2';
const TopNav = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav>
      <label className="logo"><Avatar sx={{ bgcolor: '#FFFFFF0F' }} src="/tailwindlogo.jpg" />
          </label>
      <div className="bars">
        <FaBars onClick={toggle} style={{color:"white"}}/>
      </div>
      <div className="menu" style={{ left: isOpen ? "-100%" : "0" }}>
        <div className="list_item">
          <Avatar sx={{ bgcolor: 'var(--primary1, #020610)' }}>
            <GroupAddIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: 'var(--primary1, #020610)' }}>
            <AddAlertIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: '#FFFFFF0F' }}src="\e5ba883e6f3b1f7f78b90806a3b010a5.svg">
            {/* <Person2Icon /> */}
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
