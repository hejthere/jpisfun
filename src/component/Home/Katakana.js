import React, { Component } from 'react';
import './katakana.css';

class Katakana extends Component { 

state = { 
question: [ 
{id:1, katakana:'あ', option:['a' ,'i','e','o'], answer:'a'},
{id:2, katakana:'い', option:['a' ,'i','e','o'], answer:'i'},
{id:3, katakana:'う', option:['a' ,'i','u','o'], answer:'u'},],
displayQuestion: 'あ',
displayOption: ['a' ,'i','e','o'],
displayAnswer: 'a',
}


answerHandler =(e)=> {
 if(e.target.innerHTML === this.state.displayAnswer){ 
alert('correct!');
let randomNumber = Math.floor(Math.random()*3);
this.setState({
displayQuestion: this.state.question[randomNumber].katakana, 
displayOption: this.state.question[randomNumber].option,
displayAnswer: this.state.question[randomNumber].answer
})
let button = document.getElementsByClassName('katakana-button');
var i;
for (i = 0; i < button.length; i++) {
    button[i].style.border='2px solid var(--blue)';
    button[i].style.color='var(--blue)';

}
}else{ 
e.target.style.color='red'
e.target.style.border='2px solid red'
}}

render() {

   let options =''; 
   options=  this.state.displayOption.map( option => {
    return ( 
        <button 
        className='katakana-button'
        onClick={this.answerHandler}
        key={option.id}>
        {option}</button>
    )}
    )


return ( 
<div>
<div className='katakana-container'> 
<p className='katakana-question'> {this.state.displayQuestion}</p>
</div>
<br />
<br />
{options}
</div>
)}}

export default Katakana;