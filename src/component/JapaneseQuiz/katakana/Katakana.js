import React, { Component } from 'react';
import './katakana.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Katakana extends Component { 

state = { 
question: [ 
{id:1, katakana:'あ', option:['a' ,'i','u','e','o'], answer:'a'},
{id:2, katakana:'い', option:['a' ,'i','u','e','o'], answer:'i'},
{id:3, katakana:'う', option:['a' ,'i','u','e','o'], answer:'u'},
{id:4, katakana:'え', option:['a' ,'i','u','e','o'], answer:'u'},
{id:5, katakana:'お', option:['a' ,'i','u','e','o'], answer:'o'},
{id:6, katakana:'か', option:['ka','ki','ku','ke','ko'], answer:'ka'},
{id:7, katakana:'き', option:['ka','ki','ku','ke','ko'], answer:'ki'},],
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
    button[i].style.color='white';

}
}else{ 
e.target.style.color='red'
e.target.style.border='2px solid red'
}}

render() {

   let options =''; 
   options=  this.state.displayOption.map( option => {
    return ( 
        <Button
        className='katakana-button'
        onClick={this.answerHandler}
        key={option.id}>
        {option}</Button>
    )}
    )


return ( 
<Container fluid>
<h5 className='katakana-introduction'>
   Level 1: Do you know the romaji of the following katakana ? </h5>

<div className='katakana-container'> 
<br />
<p className='katakana-question'> {this.state.displayQuestion}</p>
</div>
{options}
<br />
<br />
</Container>
)}}

export default Katakana;