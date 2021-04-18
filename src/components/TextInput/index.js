import React from 'react'
import { useState } from 'react'

import { Input, TextField, SendButton } from './style'

function TextInput(props) {
    const [text, setText] = useState('');
    const onSend = (e) => {
        e.preventDefault();
        if(!text){
            return
        }
        props.addMessage(text);
        setText("");
    }
    return (
        <Input>
            <TextField type="text" placeholder="Text..." value={text} onChange={(e) => setText(e.target.value)}/>
            <SendButton onClick={onSend} >Senden</SendButton>
        </Input>
    )
}

export default TextInput