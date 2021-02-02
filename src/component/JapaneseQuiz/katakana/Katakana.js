import React, { Component } from 'react';
import './katakana.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Katakana extends Component {

    state = {
        question: [
            { id: 1, katakana: 'あ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'a' },
            { id: 2, katakana: 'い', option: ['a', 'i', 'u', 'e', 'o'], answer: 'i' },
            { id: 3, katakana: 'う', option: ['a', 'i', 'u', 'e', 'o'], answer: 'u' },
            { id: 4, katakana: 'え', option: ['a', 'i', 'u', 'e', 'o'], answer: 'u' },
            { id: 5, katakana: 'お', option: ['a', 'i', 'u', 'e', 'o'], answer: 'o' },
            { id: 6, katakana: 'か', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ka' },
            { id: 7, katakana: 'き', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ki' },
            { id: 8, katakana: 'く', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ku' },
            { id: 9, katakana: 'け', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ke' },
            { id: 10, katakana: 'こ', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ko' },],
        displayQuestion: 'あ',
        displayOption: ['a', 'i', 'u', 'e', 'o'],
        displayAnswer: 'a',

        question2: [
            { id: 1, katakana: 'ア', option: ['a', 'i', 'u', 'e', 'o'], answer: 'a' },
            { id: 2, katakana: 'イ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'i' },
            { id: 3, katakana: 'ウ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'u' },
            { id: 4, katakana: 'エ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'u' },
            { id: 5, katakana: 'オ', option: ['a', 'i', 'u', 'e', 'o'], answer: 'o' },
            { id: 6, katakana: 'カ', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ka' },
            { id: 7, katakana: 'き', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ki' },
            { id: 8, katakana: 'ク', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ku' },
            { id: 9, katakana: 'ケ', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ke' },
            { id: 10, katakana: 'コ', option: ['ka', 'ki', 'ku', 'ke', 'ko'], answer: 'ko' },],
        displayQuestion2: 'ア',
        displayOption2: ['a', 'i', 'u', 'e', 'o'],
        displayAnswer2: 'a',
    }


    answerHandler = (e) => {
        if (e.target.innerHTML === this.state.displayAnswer) {
            alert('correct!');
            let randomNumber = Math.floor(Math.random() * 10);
            this.setState({
                displayQuestion: this.state.question[randomNumber].katakana,
                displayOption: this.state.question[randomNumber].option,
                displayAnswer: this.state.question[randomNumber].answer
            })
            let button = document.getElementsByClassName('katakana-button');
            var i;
            for (i = 0; i < button.length; i++) {
                button[i].style.border = '2px solid var(--blue)';
                button[i].style.color = 'white';

            }
        } else {
            e.target.style.color = 'red'
            e.target.style.border = '2px solid red'
        }
    }

    answerHandler2 = (e) => {
        if (e.target.innerHTML === this.state.displayAnswer2) {
            alert('correct!');
            let randomNumber = Math.floor(Math.random() * 10);
            this.setState({
                displayQuestion2: this.state.question2[randomNumber].katakana,
                displayOption2: this.state.question2[randomNumber].option,
                displayAnswer2: this.state.question2[randomNumber].answer
            })
            let button = document.getElementsByClassName('katakana-button2');
            var i;
            for (i = 0; i < button.length; i++) {
                button[i].style.border = '2px solid var(--blue)';
                button[i].style.color = 'white';

            }
        } else {
            e.target.style.color = 'red'
            e.target.style.border = '2px solid red'
        }
    }


    render() {

        let options = '';
        options = this.state.displayOption.map(option => {
            return (
                <Button
                    className='katakana-button'
                    onClick={this.answerHandler}
                    key={option.id}>
                    {option}</Button>
            )
        })

        let options2 = '';
        options2 = this.state.displayOption2.map(option => {
            return (
                <Button
                    className='katakana-button2'
                    onClick={this.answerHandler2}
                    key={option.id}>
                    {option}</Button>
            )
        })


        return (
            <Container fluid>
                <h5 className='katakana-introduction'>
                    Level 1: Do you know the pronunciation of the following Hirakana or katakana ? </h5>
                <Row xs={1} sm={1} md={2} xl={2}>
                    <Col>
                        <h5 className='katakana-header'>Hirakana Test</h5>
                        <div className='katakana-container'>
                            <br />
                            <p className='katakana-question'> {this.state.displayQuestion}</p>
                        </div>
                        {options}
                        <br />
                        <br />
                    </Col>
                    <Col>
                        <h5 className='katakana-header'>Katakana Test</h5>
                        <div className='katakana-container'>
                            <br />
                            <p className='katakana-question'> {this.state.displayQuestion2}</p>
                        </div>
                        {options2}
                        <br />
                        <br />
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default Katakana;