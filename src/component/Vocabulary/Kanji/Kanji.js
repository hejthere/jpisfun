import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from '../../Reusable/Button'
  ;
import Spinner from 'react-bootstrap/Spinner';
import './Kanji.css'

const Kanji = () => {

  const [kanji, setKanji] = useState();
  const [meanings, setMeanings] = useState('');
  const [kunyomi, setKunyomi] = useState('');
  const [onyomi, setOnyomi] = useState('');
  const [typeKanji, setTypeKanji] = useState();
  const [inputKanji, setInputKanji] = useState('例');
  const [loading, setLoading] = useState(false);

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
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setKanji('Not Found!')
        setMeanings('/')
        setKunyomi('/')
        setOnyomi('/')
        setLoading(false)
      }, [inputKanji])
  })

  const kanjiOnChangeHandler = (e) => {
    const kanjiInInput = e.target.value;
    setTypeKanji(kanjiInInput);
  }

  const searchKanjiHandler = () => {
    const searchKanji = document.getElementById('searchKanji').value;
    if (searchKanji.length > 1) {
      alert('Please enter 1 kanji')
    } else {
      setInputKanji(searchKanji);
      setLoading(true);
    }
  }

  const resultContent = [
    {
      type: 'kanji',
      label: '',
      content: kanji
    },
    {
      type: 'meanings',
      label: 'Meanings:',
      content: meanings
    },
    {
      type: 'kunyomi',
      label: '訓読み:',
      content: kunyomi

    },
    {
      type: 'onyomi',
      label: '音読み:',
      content: onyomi
    },
  ]
  const searchResult = resultContent.map(el => {
    return (
      <Row key={el.type}>
        <div className={`kanji-div ${el.type}`}>
          {el.label}{el.content}
        </div></Row>
    )
  })

  return (
    <Container fluid="true" className="mb-3">
      <h3 className='title-bar bg-yellow'>Kanji Dictionary</h3>
      <Container className='kanji-container'>
        <Row className='kanji-input'><input onChange={kanjiOnChangeHandler} id='searchKanji' placeholder='Search Kanji' value={typeKanji} />
          <Button onClick={searchKanjiHandler}>Search</Button> </Row>
        {loading &&
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>}
        {searchResult}
      </Container>
    </Container>
  )
}

export default Kanji;