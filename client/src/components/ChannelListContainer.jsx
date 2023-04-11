import React from 'react';
import { CHannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannel, TeamChannelPreview } from './';
import AdeChatIcon from '../assets/adechat.png'
import LogoutIcon from '../assets/logout.png'

const SideNav = () => (
    <div className="channel-list__sidenav">
        <div className="channel-list__sidenav__icon1">
            <div className="icon1__inner">
                <img src={AdeChatIcon} alt= "ADECHAT" width="30" />
            </div>
        </div>
        <div className="channel-list__sidenav__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt= "Logout" width="30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
    return(
        <div>
            ChannelListContainer
        </div>
    );
}

export default ChannelListContainer