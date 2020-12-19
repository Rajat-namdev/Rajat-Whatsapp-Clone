import React from "react";
import "./Sidebar.css";
import  DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";


function Sidebar() {
    return(
        <div className="Sidebar">
            <div className="Sidebar_header">
             <Avatar src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Tanned
" />
            
                <div className="Sidebar_headerRight">
                    <IconButton>
                      <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                   

                </div>
             
            </div>
            <div className="Sidebar_search">
                <div className="Sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start new chat" type="text" />

                </div>
            </div>
            <div className="Sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar