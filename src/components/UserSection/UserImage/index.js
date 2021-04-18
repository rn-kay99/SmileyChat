import React from 'react'

import { ProfileImage, DecorationCircle1, DecorationCircle2, ImageEmoji } from "./style"

function UserImage(props) {
    return (
        <ProfileImage>
            <DecorationCircle1 />
            <DecorationCircle2 />
            <ImageEmoji> {props.userEmoji.emoji} </ImageEmoji>
        </ProfileImage>
    )
}

export default UserImage
