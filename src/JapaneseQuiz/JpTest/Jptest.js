import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './JpTest.css';
import teacher from '../../../Picture/teacher.png';
import { Container, Col } from 'react-bootstrap';
import Card from './Card';

class Test extends React.Component {
	state = {
		flipCards: [
			{ question: 'How are you', answer: 'お元気ですか' },
			{ question: 'Thank You', answer: 'ありがとう' },
			{ question: 'Sorry', answer: 'すみません' },
			{ question: 'Goodbye', answer: 'じゃね' },
			{ question: 'Good Night', answer: 'おやすみ' },
			{ question: 'Add Oil', answer: '頑張って！' },
			{ question: 'See you tmr', answer: 'またあした' },
			{ question: 'Take care', answer: 'お大事に' },
		]
	}

	render() {

		let cards = this.state.flipCards.map(card => {
			return (
				<Card
					key={card.question}
					question={card.question}
					answer={card.answer} />
			)
		})
		return (
			<div>
				<Row fluid="true" className='title-bar bg-red'>
					<Col xs={9}>
						<h5>
							Level 2 : Do you know how to say the following greetings in Japanese?
    Press the button to check the answer ! </h5></Col>
					<Col xs={3}><Image fluid="true"
						src={teacher} className='introduction' alt='uketsuke' /></Col>
				</Row>
				<Container fluid="true">
					<div className="card-container">
						{cards}
					</div>
				</Container>
				<br />

				<Button onClick={() => window.history.back()}> Back </Button>
				<br />
				<br />
			</div>
		)

	}
};

export default Test; 