import React, { Component } from 'react';
import './katakana.css';
import { Button } from '../../Reusable/Button'
    ;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Katakana extends Component {

    state = {
        question: [
            { id: 1, hirakana: 'あ', katakana: 'ア', option: ['a', 'i', 'u', 'e', 'o'], answer: 'a' },
            { id: 2, hirakana: 'い', katakana: 'イ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'i' },
            { id: 3, hirakana: 'う', katakana: 'ウ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'u' },
            { id: 4, hirakana: 'え', katakana: 'エ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'e' },
            { id: 5, hirakana: 'お', katakana: 'オ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'o' },
            { id: 6, hirakana: 'か', katakana: 'カ', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ka' },
            { id: 7, hirakana: 'き', katakana: 'き', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ki' },
            { id: 8, hirakana: 'く', katakana: 'ク', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ku' },
            { id: 9, hirakana: 'け', katakana: 'ケ', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ke' },
            { id: 10, hirakana: 'こ', katakana: 'コ', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ko' },],
        quizCard: [
            { id: 101, text: 'Hirakana Test', displayQuestion: 'あ', displayOption: ['a', 'i', 'u', 'e', 'o'], displayAnswer: 'a' },
            { id: 102, text: 'Katakana Test', displayQuestion: 'ア', displayOption: ['a', 'i', 'u', 'e', 'o'], displayAnswer: 'a' }
        ]
    }

    resetAnswerHandler = (e, isCorrect) => {
        if (isCorrect) {
            alert('correct!');
            var button = document.querySelectorAll("#katakana-button")
            var i;
            for (i = 0; i < button.length; i++) {
                button[i].style.color = 'var(--blue)';
                button[i].style.border = '2px solid var(--blue)';
            }
        } else {
            e.target.style.color = 'var(--red)';
            e.target.style.border = '5px solid var(--red)';
        }
    }

    answerHandler = (e, index) => {
        if (e.target.innerHTML === this.state.quizCard[index].displayAnswer) {
            let randomNumber = Math.floor(Math.random() * 10);
            const updatedQuizCard = [...this.state.quizCard]
            updatedQuizCard[index].displayQuestion = this.state.question[randomNumber].hirakana
            updatedQuizCard[index].displayOption = this.state.question[randomNumber].option
            updatedQuizCard[index].displayAnswer = this.state.question[randomNumber].answer
            this.setState({ quizCard: updatedQuizCard })
            this.resetAnswerHandler(e, true)
        } else {
            this.resetAnswerHandler(e, false)
        }
    }

    render() {
        let quizBoxContent = [];
        quizBoxContent = this.state.quizCard.map((option, index) => {
            return (
                <Col key={option.id}>
                    <h5 className='katakana-header'>{option.title}</h5>
                    <div className='katakana-container'>
                        <br />
                        <p className='katakana-question'>{option.displayQuestion}</p>
                    </div>
                    <div>
                        {option.displayOption.map(option => {
                            return (
                                <button
                                    key={option}
                                    id='katakana-button'
                                    onClick={(event) => this.answerHandler(event, index)}>
                                    {option}
                                </button>)
                        })}</div>

                    <br />
                </Col >
            )
        })


        return (
            <Container fluid="true" className="w-100 mb-3" >
                <Row fluid="true">
                    <h5 className='title-bar bg-yellow'>
                        Level 1: Do you know the pronunciation of the following Hirakana and Katakana ? </h5></Row>
                <Row xs={1} sm={1} md={2} xl={2}>
                    {quizBoxContent}
                </Row>
            </Container>
        )
    }
}

export default Katakana;