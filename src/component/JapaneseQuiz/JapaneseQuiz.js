import React from 'react';
import { Container } from 'react-bootstrap';
import Grammar from './Grammar/Grammar';
import Katakana from './Katakana/Katakana';
import Test from './JpTest/Jptest';

const JapaneseQuiz = () => {

    return (
        <Container fluid>
            <section id="katakana">
                <Katakana />
                <br />
                <br />
            </section>
            <section id="test">
                <Test />
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