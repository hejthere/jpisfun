import React from 'react';

const Quotes=(props)=> {

return (

<div class='quotebox'> 
<p class='japanesequote'>{props.japaneseQuote}</p>
<p class='englishquote'>{props.englishQuote}</p>
<br/>
<p class='authorquote'>{props.authorQuote}</p>
</div>
)}

export default Quotes; 