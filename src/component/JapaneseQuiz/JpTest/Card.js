import React, { useState } from 'react';
import './JpTest.css';


const Card = (props) => {

    const [flip, setFlip] = useState(false);

    return (
        <div>
            <div
                onClick={() => { setFlip(!flip) }}
                className={`normalCard ${flip ? 'flip' : ''}`}>

                <div className='frontside'>{props.question}</div>
                <div className='backside'>{props.answer}</div>
            </div>
        </div>
    )
}

export default Card; 