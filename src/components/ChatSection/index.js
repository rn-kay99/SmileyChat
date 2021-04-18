import React from 'react'

import { ChatSectionGrid } from './style'

import MessagesCard from './MessagesCard/index'
import WordsCard from './WordsCard/index'

function ChatSection(props) {
    return (
        <ChatSectionGrid>
            <MessagesCard messages={props.messages} />
            <WordsCard />
        </ChatSectionGrid>
    )
}

export default ChatSection
