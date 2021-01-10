import React, { useEffect, useState } from 'react';
import {Container , Row, Col, Button} from 'react-bootstrap';
import './Kanji.css'

const Kanji = () => {

  const [kanji, setKanji] = useState();
  const [meanings, setMeanings] = useState();
  const [kunyomi, setKunyomi] = useState();
  const [onyomi, setOnyomi] = useState();
  const [typeKanji , setTypeKanji] = useState();
  const [inputKanji , setInputKanji] =useState('暇'); 

  useEffect(() => {
    fetch(`https://kanjiapi.dev/v1/kanji/${inputKanji}`)
    .then(res => res.json())
    .then(data => {
      const kanji = data.kanji
      const meanings = data.meanings.join(', ')
      const kunyomi = data.kun_readings.join(', ')
      const onyomi = data.on_readings.join(', ')
      setKanji(kanji)
      setMeanings(meanings)
      setKunyomi(kunyomi)
      setOnyomi(onyomi)
    })
    .catch(error => console.log(error));
  }, [inputKanji])

  const kanjiOnChangeHandler =(e) => {
  const kanjiInInput =  e.target.value;
    setTypeKanji(kanjiInInput);
  }

  const searchKanjiHandler =()=> {
    const searchKanji = document.getElementById('searchKanji').value;
    console.log(searchKanji);
    setInputKanji(searchKanji);
  }

  return (
    
    <Container className='kanji-container'>
      <h1>Kanji Dictionary</h1>
      <Row className='kanji-input'><input onChange={kanjiOnChangeHandler} id='searchKanji' placeholder='Input Kanji' value={typeKanji}/> 
      <Button onClick={searchKanjiHandler}>Check</Button> </Row>
      <Row>
        <div className='kanji-div kanji'>{kanji}</div></Row>
      <Row>
        <div className='kanji-div meanings'>Meaning ：{meanings}</div>
      </Row>
        <Row>
        <div className='kanji-div kunyomi'>訓読み：{kunyomi}</div></Row>
        <Row>
        <div className='kanji-div onyomi'>音読み：{onyomi}</div>
      </Row>
      <br />
      <br />
    </Container>
  )
}

export default Kanji; 