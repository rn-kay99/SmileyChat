import React from 'react'

import { Messages, MessagesHeadline } from './style'

import { Card } from '../../Card/style'
import MessageCard from '../MessageCard/index'

function MessagesCard(props) {

    return (
        <Card>
            <Messages>
                <MessagesHeadline>Nachrichten</MessagesHeadline>
                {props.messages.map((message) => {
                    return <MessageCard user={message.user} text={message.text} key={Math.random()} />
                })}
                
            </Messages>
        </Card>
    )
}

export default MessagesCard