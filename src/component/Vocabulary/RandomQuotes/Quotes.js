import React from 'react';

const Quotes = (props) => {

    return (

        <div className='quote-box'>
            <p className='japanese-quote'>{props.japaneseQuote}</p>
            <p className='english-quote'>{props.englishQuote}</p>
            <br />
            <p>{props.authorQuote}</p>
        </div>
    )
}

export default Quotes; 