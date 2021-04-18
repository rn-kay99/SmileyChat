import React from 'react'

import UserSectionGrid from "./style"

import UserCard from "./UserCard/index"
import InfoCard from "./InfoCard/index"

function UserSection(props) {
    return (
        <UserSectionGrid>
            <UserCard userEmoji={props.userEmoji} />
            <InfoCard userOnline={props.userOnline} />
        </UserSectionGrid>
    )
}

export default UserSection
