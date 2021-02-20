import React from 'react';
import Grammar from './Grammar/Grammar';
import Katakana from './katakana/Katakana';
import Section from '../Reusable/Section'

const Vocabulary = () => {

    const sections = [
        {
            page: <Katakana />,
            id: 'katakana'

        },
        {
            page: <Grammar />,
            id: 'grammar'

        },
    ]

    return (
        <Section sections={sections} />

    )
}

export default Vocabulary; 