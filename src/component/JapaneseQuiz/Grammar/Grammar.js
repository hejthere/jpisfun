import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grammar.css'
import momotato from '../../../Picture/momotaro.png';



const Grammar = props => {

    const [audio] = useState();

    const showAnswerHandler = (event) => event.target.style.opacity = '1';

    const showTranslationHandler = () => {
        const translationdiv = document.getElementById('translation');
        translationdiv.textContent = 'Momo-taro is a boy who was born from a peach. To save the villagers, he started a journey to fight against the Demons. It is a story about how Momo-taro and the animals friends he met on his way defeated the Demons.';
        translationdiv.style.fontSize = '1.5rem';
    }

    const readAloudHandler = () => {
        document.getElementById('audio').play();
    }

    return (
        <Container fluid="true">
            <h5 className='title-bar bg-blue'>
                Level 3 : Do you know which particles should be used in the following article ?
                 Click on the ( ) to view the answer. </h5><br />

            <Row sm={1} xs={1} md={2} lg={2} id='momotaro-container'>
                <Col id='momotaro' >
                    桃から生まれた桃太郎(<span onClick={showAnswerHandler} className="hiddenword">と</span>)いう男の子は、村の人たち(<span onClick={showAnswerHandler} className="hiddenword">を</span>)助けるため(<span onClick={showAnswerHandler} className="hiddenword">に</span>)鬼退治に向かいます。道中で動物たち(<span onClick={showAnswerHandler} className="hiddenword">と</span>)出会い、仲間となり、共に鬼退治に挑むお話です。<br /><br /></Col>
                <Col><Image className='momotaro-pic' src={momotato} alt='momotaro' /></Col></Row>


            <Button onClick={readAloudHandler}>Listen</Button>
            <audio id="audio" controls hidden src='http://api.voicerss.org/?key=00ae74bcb9584b048364d0b930dfff93&hl=ja-jp&v=fumi&r=-4&c=MP3&src=桃からうまれたももたろうというおとこのこは、村の人たちをたすけるためにおにたいじに向かいます。道中でどうぶつたちとであい、なかまとなり、ともに鬼たいじにいどむお話です。'></audio>

            <Button onClick={showTranslationHandler}>See Translation</Button>
            <div id='translation'></div>
            <br />
        </Container>

    )
}

export default Grammar; 
