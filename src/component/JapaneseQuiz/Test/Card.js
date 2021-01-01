import React, { useState } from 'react';
import {Col} from 'react-bootstrap';
import './Test.css'


const Card = ( props )=> { 

    const [flip, setFlip] = useState(false); 
    
    return(
        <Col> 
        <div
        onClick={()=> {setFlip(!flip)
                       console.log(flip) }}
        className={`normalCard ${flip?'flip':''}`}>
        
		<div className='frontside'>{props.question}</div>
		<div className='backside'>{props.answer}</div> 
        </div>
        </Col>
    )
}

export default Card; 