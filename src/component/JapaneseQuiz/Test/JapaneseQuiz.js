import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Grammar from '../Grammar/Grammar';
import Katakana from '../katakana/Katakana';
import Test from '../Test/Test';
import './JapaneseQuiz.css';

const JapaneseQuiz = () => {

    return (
        <Container fluid>
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