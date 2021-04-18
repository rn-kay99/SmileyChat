import React from 'react'

import { Message, MessageImage } from './style'

function MessageCard(props) {
    return (
        <Message>
            <MessageImage>{props.user}</MessageImage>
            <div>{props.text}</div>
        </Message>
    )
}

export default MessageCard
