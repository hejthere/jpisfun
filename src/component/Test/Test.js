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
    <img src={teacher} className='introduction' alt='uketsuke'/> 
    </div>


    <div className="row">

	<div className="box">
	<div id= "Question"> How are you </div>
	<button onClick={this.shownAnswerHandler.bind(this,1)} > ANSWER </button>
	<div id= "Answer1" className ="Answer"  >お元気ですか </div> </div> 
    <div className="box">
	<div id= "Question"> Bye</div>
	<button onClick={this.shownAnswerHandler.bind(this,2)} > ANSWER </button>
	<div id= "Answer2" className ="Answer" >じゃね </div> </div> 
    <div className="box">
	<div id= "Question"> Goodnight </div>
	<button onClick={this.shownAnswerHandler.bind(this,3)} > ANSWER </button>
	<div id= "Answer3" className ="Answer" >おやすみなさい </div> </div> 
    <div className="box">
	<div id= "Question"> Sorry </div>
	<button onClick={this.shownAnswerHandler.bind(this,4)} > ANSWER </button>
	<div id= "Answer4" className ="Answer" >すみません</div> </div> 
    
    <div className="box">
	<div id= "Question"> See you </div>
	<button onClick={this.shownAnswerHandler.bind(this,5)} > ANSWER </button>
	<div id= "Answer5" className ="Answer" >またあした</div> </div> 

    <div className="box">
	<div id= "Question"> Take Care </div>
	<button onClick={this.shownAnswerHandler.bind(this,6)} > ANSWER </button>
	<div id= "Answer6" className ="Answer" >お大事に</div> </div> 

    <div className="box">
	<div id= "Question"> Thank You </div>
	<button onClick={this.shownAnswerHandler.bind(this,7)} > ANSWER </button>
	<div id= "Answer7" className ="Answer" >ありがとう</div> </div>

    <div className="box">
	<div id= "Question"> Wait </div>
	<button onClick={this.shownAnswerHandler.bind(this,8)} > ANSWER </button>
	<div id= "Answer8" className ="Answer" >ちょっと待って</div> </div>

    </div>
	
    <button onClick={window.print}> Print </button>
    <button onClick={window.history.back}> Back </button>


    </div> 
)

}};

export default Test; 