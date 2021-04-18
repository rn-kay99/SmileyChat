import React from 'react'

import UserImage from "../UserImage/index"
import { CenteredCard, CardText } from '../../Card/style'

import { User } from './style'

function UserCard(props) {
    return (
        <CenteredCard>
            <User>
                <UserImage userEmoji={props.userEmoji} />
                <CardText>
                    <h3>DU BIST: {props.userEmoji.name}</h3>
                </CardText>
            </User>
        </CenteredCard>
    )
}

export default UserCard