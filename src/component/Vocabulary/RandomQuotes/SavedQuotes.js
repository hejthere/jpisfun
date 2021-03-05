import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from '../../Reusable/Button'
    ;
import Quotes from './Quotes';
import './randomQuote.css'

const SavedQuotes = () => {

    let storedQuotes = [];
    let displayQuotes = [];
    storedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));


    displayQuotes = storedQuotes.map(quote => {
        return (<Quotes
            key={quote.english}
            japaneseQuote={quote.japanese}
            englishQuote={quote.english}
            authorQuote={quote.author}
        />)
    })

    return (
        <Container fluid="true">
            <Row><h3 className="title-bar bg-yellow">Saved Quotes</h3></Row>
            {displayQuotes}
            <Button onClick={() => window.history.back()}>Back</Button>
        </Container>
    )
}

export default SavedQuotes; 