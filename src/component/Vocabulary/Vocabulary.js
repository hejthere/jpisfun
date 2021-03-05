import React from 'react';
import RandomQuote from './RandomQuotes/RandomQuote';
import VocabDiseases from './VocabDiseases/VocabDiseases';
import Kanji from './Kanji/Kanji'
import Section from '../Reusable/Section'

const Vocabulary = () => {

    const sections = [
        {
            page: <Kanji />,
            id: 'kanji'
        },
        {
            page: <VocabDiseases />,
            id: 'vocabDiseases'
        },

    ]

    return (
        <Section sections={sections} />

    )
}

export default Vocabulary; 