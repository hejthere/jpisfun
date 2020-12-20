import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Quotes from './Quotes';

const SavedQuotes =() => {




let storedQuotes = [];
let displayQuotes = [];
storedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));

console.log(storedQuotes);

displayQuotes = storedQuotes.map( quote => {
return(<Quotes 
japaneseQuote = {quote.japanese}
englishQuote = {quote.english}
authorQuote = {quote.author}
/>)
})

return(
<Container>
{displayQuotes}
<Button onClick={()=>window.history.back()}>Back</Button>
</Container>
)
}

export default SavedQuotes; 