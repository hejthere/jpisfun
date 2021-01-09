import React, {useEffect, useState} from 'react';
import './Kanji.css'

const Kanji =()=> {

const [ kanji, setKanji ] =  useState();
const [ meanings, setMeanings ] =  useState();
const [ kunyomi, setKunyomi ] =  useState();
const [ onyomi, setOnyomi ] =  useState();

useEffect ( ()=> { fetch('https://kanjiapi.dev/v1/kanji/蛍')
    .then(res => res.json())
    .then(data => {
      const kanji = data.kanji
      const meanings = data.meanings
      const kunyomi = data.kun_readings
      const onyomi = data.on_readings
      setKanji(kanji)
      setMeanings(meanings)
      setKunyomi(kunyomi)
      setOnyomi(onyomi)
    })
      .catch(error => console.log(error));
    })
return(
  <div>
  <h6>Kanji Dictionary</h6>
  <div className='kanji-container'>
    <div className='kanji-div kanji'>{kanji}</div>
    <div className='kanji-div meanings'>{meanings}</div>
    <div className='kanji-div kunyomi'>{kunyomi}</div>
    <div className='kanji-div onyomi'>{onyomi}</div>
    </div>
    <br />
    <br />
  </div>
)
}

export default Kanji; 