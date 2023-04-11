import React from "react";
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer } from "./components";

import './App.css';

const api_key = 'weuprjd2brr2';

const client = StreamChat.getInstance(api_key);

const App = () => {
    return (
        <div ClassName="app_wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer>

                </ChannelListContainer>
            </Chat>
            <h1>AdeChat</h1>
        </div>
    );
}

export default App;
