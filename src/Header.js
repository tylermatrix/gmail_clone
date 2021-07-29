import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon></MenuIcon>
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search Mail" />
        <ArrowDropDownIcon className="header__inputCaret"></ArrowDropDownIcon>
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>
        <IconButton>
          <NotificationsIcon></NotificationsIcon>
        </IconButton>
        <Avatar></Avatar>
      </div>
    </div>
  );
}

export default Header;
