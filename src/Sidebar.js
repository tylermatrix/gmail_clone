import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      ></SidebarOption>
      <SidebarOption Icon={StarIcon} title="Inbox" number={54}></SidebarOption>
      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={54}
      ></SidebarOption>
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={54}
      ></SidebarOption>
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54}></SidebarOption>
      <SidebarOption Icon={NoteIcon} title="Inbox" number={54}></SidebarOption>
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="More"
        number={54}
      ></SidebarOption>

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon></PersonIcon>
          </IconButton>
          <IconButton>
            <DuoIcon></DuoIcon>
          </IconButton>
          <IconButton>
            <PhoneIcon></PhoneIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
