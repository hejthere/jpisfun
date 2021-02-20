import React from 'react';
import { Container } from 'react-bootstrap';
import Grammar from './Grammar/Grammar';
import Katakana from './Katakana/Katakana';

const JapaneseQuiz = () => {

    return (
        <Container fluid>
            <section id="katakana">
                <Katakana />
                <br />
                <br />
            </section>
            <section id="grammar">
                <Grammar />
                <br />
                <br />
            </section>
        </Container>

    )
}

export default JapaneseQuiz;