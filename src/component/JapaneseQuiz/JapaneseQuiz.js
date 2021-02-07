import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Grammar from './Grammar/Grammar';
import Katakana from './Katakana/Katakana';
import Test from './JpTest/Jptest';

const JapaneseQuiz = () => {

    return (
        <Container fluid="true">
            <Row id="katakana">
                <Katakana />
                <br />
                <br />
            </Row>
            <Row id="test">
                <Test />
                <br />
                <br />
            </Row>
            <br /><br />
            <Row id="grammar">
                <Grammar />
                <br />
                <br />
            </Row>
        </Container>

    )
}

export default JapaneseQuiz;