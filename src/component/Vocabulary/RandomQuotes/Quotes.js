import React from 'react';

const Quotes = (props) => {

    return (

        <div class='quote-box'>
            <p class='japanese-quote'>{props.japaneseQuote}</p>
            <p class='english-quote'>{props.englishQuote}</p>
            <br />
            <p>{props.authorQuote}</p>
        </div>
    )
}

export default Quotes; 