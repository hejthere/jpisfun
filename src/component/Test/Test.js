import React from 'react';
import './Test.css';
import teacher from '../../Picture/teacher.png';

class Test extends React.Component
{ 
    shownAnswerHandler =(number) => {
        var result= document.getElementById('Answer'+number);
        result.style.visibility='visible';}

    render (){ 

    return (
    <div>
    <div className='introduction'> 
    <p className='introduction'>
    Do you know how to say the following greetings in Japanese? <br />
    Press the button to check the answer ! </p>
    <img src={teacher} className='introduction' /> 
    </div>


    <div className="row">
	<div className="col-3">
	<div id= "Question"> How are you </div>
	<button onClick={this.shownAnswerHandler.bind(this,1)} > ANSWER </button>
	<div id= "Answer1" className ="Answer"  >お元気ですか </div> </div> 
    <div className="col-3">
	<div id= "Question"> Bye</div>
	<button onClick={this.shownAnswerHandler.bind(this,2)} > ANSWER </button>
	<div id= "Answer2" className ="Answer" >じゃね </div> </div> 
    <div className="col-3">
	<div id= "Question"> Goodnight </div>
	<button onClick={this.shownAnswerHandler.bind(this,3)} > ANSWER </button>
	<div id= "Answer3" className ="Answer" >おやすみなさい </div> </div> 
    <div className="col-3">
	<div id= "Question"> Sorry </div>
	<button onClick={this.shownAnswerHandler.bind(this,4)} > ANSWER </button>
	<div id= "Answer4" className ="Answer" >すみません</div> </div> 


    </div>
	
    <button onClick={window.print}> Print </button>
    <button onClick={window.history.back}> Back </button>


    </div> 
)

}};

export default Test; 