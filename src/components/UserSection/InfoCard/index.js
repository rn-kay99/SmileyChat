import React from 'react'

import { InfoCardGrid } from './style'

import { Card } from '../../Card/style'
import UsersOnline from '../UsersOnline/index'

function InfoCard(props) {
    return (
        <Card>
            <InfoCardGrid>
                <div>
                    <h1>User online: {props.userOnline} </h1>
                    <div> Willkommen! Rechts siehst du wer sonst noch online ist. </div>
                    <div> In der Wörterliste findest du die Wörter die du in deine Nachricht einbauen musst, damit du sie versenden kannst. </div>
                    <div> Viel Spaß! </div>
                </div>
                <UsersOnline />
            </InfoCardGrid>
        </Card>

    )
}

export default InfoCard
