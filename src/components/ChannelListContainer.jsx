import React from 'react';
import { CHannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannel, TeamChannelPreview } from './';
import AdeChatIcon from '../assets/adechat.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={AdeChatIcon} alt= "ADECHAT" width="40" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon2__inner">
                <img src={LogoutIcon} alt= "Logout" width="40" />
            </div>
        </div>
    </div>
);



const ChannelListContainer = () => {
    return(
        <>
            <SideBar />
        </>
    );
}

export default ChannelListContainer