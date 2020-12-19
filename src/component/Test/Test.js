import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Test.css';
import teacher from '../../Picture/teacher.png';
import { Container, Col } from 'react-bootstrap';

class Test extends React.Component
{ 
    shownAnswerHandler =(number) => {
        var result= document.getElementById('Answer'+number);
        result.style.visibility='visible';}

    render (){ 

    return (
    <div>
    <Row fluid className='introduction'> 
    <Col xs={9}><h5 className='introduction'>
    Do you know how to say the following greetings in Japanese? <br />
    Press the button to check the answer ! </h5></Col>
    <Col xs={3}><Image fluid src={teacher} className='introduction' alt='uketsuke'/></Col>
    </Row>


    <Container fluid='true'>
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

	</Row>
	</Container>
	
    <Button onClick={window.print}> Print </Button>
    <Button onClick={window.history.back}> Back </Button>


    </div> 
)

}};

export default Test; 