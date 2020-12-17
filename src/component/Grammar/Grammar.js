import React, { Component } from 'react'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grammar.css'
import momotato from '../../Picture/momotaro.png';



class Grammar extends Component { 

// componentDidMount () {
//         const script = document.createElement("script");
//         script.src = './RSS.js';
//         script.async = true;
//         document.body.appendChild(script);
//     }


showAnswerHandler =(event)=> event.target.style.opacity='1';


showTranslationHandler =()=> {
    const translationdiv = document.getElementById('translation');
    console.log(translationdiv);
    translationdiv.textContent ='Momo-taro is a boy who was born from a peach. To save the villagers, he started a journey to fight against the Demons. It is a story about how Momo-taro and the animals friends he met on his way defeated the Demons.'; 
    translationdiv.style.fontSize = '1.5rem';
}

// readOutLoudHandler =()=> {
//     VoiceRSS.speech({
//         key:'00ae74bcb9584b048364d0b930dfff93',
//        //how to put source like <p> in it ? //
//         src: '桃からうまれたももたろうというおとこのこは、村の人たちをたすけるためにおにたいじに向かいます。道中でどうぶつたちとであい、なかまとなり、ともに鬼たいじにいどむお話です。',
//         hl: 'ja-jp',
//         v: 'Fumi',
//         r: -4, 
//         c: 'mp3',
//         f: '44khz_16bit_stereo',
//         ssml: false
        
//     }); 
// }

 
render () {

return (
<Container fluid>
    <h5 className='description'>
    Do you know which particle should be used in the following article ?
    Click the space to view the answer. </h5><br />

<Row sm={1} xs={1} md={2} lg={2} id='momotaro-container'>
<Col id='momotaro' >
    桃から生まれた桃太郎(<span onClick={this.showAnswerHandler} className="hiddenword">と</span>)いう男の子は、村の人たち(<span onClick={this.showAnswerHandler} className="hiddenword">を</span>)助けるため(<span onClick={this.showAnswerHandler} className="hiddenword">に</span>)鬼退治に向かいます。道中で動物たち(<span onClick={this.showAnswerHandler} className="hiddenword">と</span>)出会い、仲間となり、共に鬼退治に挑むお話です。<br /><br /></Col>
<Col><Image className='momotaro-pic' src={momotato} alt='momotaro' /></Col></Row>


<Button onClick={this.readOutLoudHandler}>Listen</Button>
{/* <audio hidden controls></audio> */}
{/* <script src="External_file/voiceRSS.js"></script>  */}
<br />
<Button onClick={this.showTranslationHandler}>See Translation</Button> 
<div id='translation'></div>
<br/> 
</Container>

)}
}


export default Grammar; 
