import React from 'react';
import RandomQuote from './RandomQuote';
import VocabDiseases from './VocabDiseases';
import Kanji from '../Kanji/Kanji'

const Vocabulary =()=> {

return (
<div>
<section id='kanji'>
<Kanji />
</section>
<br />
<br /> 
<section id='quotes'>
<RandomQuote />
</section>
<br />
<br /> 
<section id='diseases'>
<VocabDiseases />
</section>
<br />
<br /> 
</div>

)}

export default Vocabulary; 