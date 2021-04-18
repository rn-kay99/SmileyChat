import React from 'react'

import { WordsCardHeadline, Words, Word } from './style'

import { Card } from '../../Card/style'

function WordsCard() {
    return (
        <Card>
            <WordsCardHeadline> Wörterliste </WordsCardHeadline>
            <Words>
                <Word> Flugzeug </Word>
                <Word> Wüste in Afrike </Word>
                <Word> Straßenmarkt </Word>
            </Words>
        </Card>
    )
}

export default WordsCard
