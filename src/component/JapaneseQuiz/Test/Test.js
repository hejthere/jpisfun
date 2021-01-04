import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Test.css';
import teacher from '../../../Picture/teacher.png';
import { Container, Col } from 'react-bootstrap';
import Card from './Card'; 

class Test extends React.Component{
	state = {
	flipCards: [ 
	{question:'How are you', answer:'お元気ですか' },
	{question:'Thank You', answer:'ありがとう' },
	{question:'Sorry', answer:'すみません'},
	{question:'Goodbye', answer:'じゃね'},
	{question:'Good Night', answer:'おやすみ' },
	{question:'Add Oil', answer:'頑張って！' },
	{question:'See you tmr', answer:'またあした'},
	{question:'Take care', answer:'お大事に'},
	]}
	
    // shownAnswerHandler =(number) => {
    //     var result= document.getElementById('Answer'+number);
    //     result.style.visibility='visible';}
	
    render (){ 

	let cards =	this.state.flipCards.map( card => { 
	return (
	
		<Card 
		question={card.question}
		answer={card.answer} /> 
	)
	})


    return (
    <div>
    <Row fluid className='introduction'> 
    <Col xs={9}><h5 className='introduction'>
    Level 2 : Do you know how to say the following greetings in Japanese?
    Press the button to check the answer ! </h5></Col>
    <Col xs={3}><Image fluid src={teacher} className='introduction' alt='uketsuke'/></Col>
    </Row>


	<Container fluid>
		<div className="card-container">  
		{cards}
		</div>
	</Container>
	<br /> 
	

    {/* <Container fluid='true'>
	<Row xs={2} sm={2} md={4} lg={4}>
	<Col>
	<div id= "Question"> How are you </div>
	<Button onClick={this.shownAnswerHandler.bind(this,1)} > ANSWER </Button>
	<div id= "Answer1" className ="Answer" >お元気ですか </div> </Col> 
	<Col>
	<div id= "Question"> Thank You </div>
	<Button onClick={this.shownAnswerHandler.bind(this,2)} > ANSWER </Button>
	<div id= "Answer2" className ="Answer">ありがとう </div> </Col> 
	<Col>
	<div id= "Question"> Sorry </div>
	<Button onClick={this.shownAnswerHandler.bind(this,3)} > ANSWER </Button>
	<div id= "Answer3" className ="Answer"  >すみません </div> </Col> 
	<Col>
	<div id= "Question"> Goodbye </div>
	<Button onClick={this.shownAnswerHandler.bind(this,4)} > ANSWER </Button>
	<div id= "Answer4" className ="Answer"  >じゃね </div> </Col> 

	<Col>
	<div id= "Question"> Good Night </div>
	<Button onClick={this.shownAnswerHandler.bind(this,5)} > ANSWER </Button>
	<div id= "Answer5" className ="Answer"  > おやすみ</div> </Col> 
	
	<Col>
	<div id= "Question">  Add Oil </div>
	<Button onClick={this.shownAnswerHandler.bind(this,6)} > ANSWER </Button>
	<div id= "Answer6" className ="Answer"  >頑張って！ </div> </Col> 
	
	<Col>
	<div id= "Question"> See you tomorrow </div>
	<Button onClick={this.shownAnswerHandler.bind(this,7)} > ANSWER </Button>
	<div id= "Answer7" className ="Answer"  >またあした </div> </Col> 
	
	<Col>
	<div id= "Question"> Good Afternoon </div>
	<Button onClick={this.shownAnswerHandler.bind(this,8)} > ANSWER </Button>
	<div id= "Answer8" className ="Answer"  >こんにちは</div> </Col> 

	</Row>

	</Container> */}
	
    <Button onClick={()=>window.history.back}> Back </Button>


    </div> 
)

}};

export default Test; 