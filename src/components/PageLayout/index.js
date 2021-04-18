import React from 'react'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'

import PageGrid from './style'

import PageHeader from '../PageHeader/index'
import UserSection from '../UserSection/index'
import ChatSection from '../ChatSection/index'
import TextInput from '../TextInput/index'

let socket;
const ENDPOINT = "localhost:5000";
const availableUserEmojis = [
    {
        name: "LÖWE",
        emoji: "🦁"
    },
    {
        name: "HUND",
        emoji: "🐶"
    },
    {
        name: "FUCHS",
        emoji: "🦊"
    },
    {
        name: "KRAKE",
        emoji: "🐙"
    },
    {
        name: "EINHORN",
        emoji: "🦄"
    },
    {
        name: "ROBOTER",
        emoji: "🤖"
    },
    {
        name: "GEIST",
        emoji: "👻"
    },
    {
        name: "DRACHE",
        emoji: "🐲"
    },
];

function PageLayout() {
    const [userOnline, setUserOnline] = useState(0);
    const [userEmoji, setUserEmoji] = useState({name: "", emoji: ""});
    const [messages, setMessages] = useState([
        {
            user: "💜",
            text: "Hello this is the first message!"
        }
    ])

    // connect with server and assignment of the emojis
    useEffect(() => {
        socket = io(ENDPOINT);
        socket.on("user_online", user_online => {
            setUserOnline(user_online);
        });

        socket.on('login', userNumber => {
            setUserEmoji(availableUserEmojis[userNumber]);
        });

        
    }, [ENDPOINT]);

    // client listens if he get a message from the server
    useEffect(() => {
        socket.on("message", (newMessage) => { 
            setMessages([...messages, newMessage]);
        });
    }, [messages]);

    
    const addMessage = (text) => {
        let newMessage = {
            user: userEmoji.emoji,
            text: text
        };

        setMessages([...messages, newMessage]);
        socket.emit("message", newMessage);
    }

    return (
        <PageGrid>
            <PageHeader />
            <UserSection userEmoji={userEmoji} userOnline={userOnline} />
            <ChatSection messages={messages} />
            <TextInput addMessage={addMessage} />
        </PageGrid>
    )
}

export default PageLayout
