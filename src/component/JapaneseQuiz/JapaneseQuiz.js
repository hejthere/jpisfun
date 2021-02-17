import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Grammar from './Grammar/Grammar';
import Katakana from './Katakana/Katakana';
import Test from './JpTest/Jptest';

const JapaneseQuiz = () => {

    return (
        <Container fluid="true">
            <Row id="katakana" >
                <Katakana />
            </Row>
            <Row id="test" className="my-3">
                <Test />
            </Row>
            <br /><br />
            <Row id="grammar" className="my-3">
                <Grammar />
            </Row>
        </Container>

    )
}

export default JapaneseQuiz;