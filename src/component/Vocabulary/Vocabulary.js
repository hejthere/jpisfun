import React from 'react';
import RandomQuote from './RandomQuotes/RandomQuote';
import VocabDiseases from './VocabDiseases/VocabDiseases';
import Kanji from './Kanji/Kanji'

const Vocabulary = () => {

    return (
        <div>
            <section id='kanji'>
                <Kanji />
            </section>
            <br />
            <br />
            <section id='quotes'>
                <RandomQuote />
            </section>
            <br />
            <br />
            <section id='diseases'>
                <VocabDiseases />
            </section>
            <br />
            <br />
        </div>

    )
}

export default Vocabulary; 