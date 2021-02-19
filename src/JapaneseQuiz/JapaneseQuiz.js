import React from 'react';
<<<<<<< HEAD
import { Container } from 'react-bootstrap';
import Grammar from './Grammar/Grammar';
import Katakana from './Katakana/Katakana';
import Test from './Test/Test';
import './JapaneseQuiz.css';
=======
import { Container, Row } from 'react-bootstrap';
import Grammar from './Grammar/Grammar';
import Katakana from './Katakana/Katakana';
import Test from './JpTest/Jptest';
>>>>>>> a6d25c79075058417b6ee78bb8d555f234817959

const JapaneseQuiz = () => {

    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> a6d25c79075058417b6ee78bb8d555f234817959
        </Container>

    )
}

export default JapaneseQuiz;