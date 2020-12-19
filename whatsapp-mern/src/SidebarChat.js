import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="SidebarChat">
            <Avatar src="https://www.purefandom.com/wp-content/uploads/2015/09/klausheadshot.png" />
            <div className="SidebarChat_info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>

            
        </div>
    )
}

export default SidebarChat
