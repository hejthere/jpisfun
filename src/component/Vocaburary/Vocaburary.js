import React from 'react';
import RandomQuote from './RandomQuote';
import VocabDiseases from './VocabDiseases';

const Vocaburary =()=> {

return (
<div>
<section id='quotes'>
<RandomQuote />
</section>
<br />
<br /> 
<section id='diseases'>
<VocabDiseases />
</section>
</div>

)}

export default Vocaburary; 