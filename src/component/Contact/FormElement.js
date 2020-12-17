import React from 'react';
import './FormElement.css';
import {Form , Container, Row, Col} from 'react-bootstrap';

const FormElement = props => {

    let formElement = null; 
    const elementClass = ['inputElement']; 
    if (!props.invalid && props.touched) { 
        elementClass.push('Invalid');
        console.log(elementClass.join(' '))
    }

    switch (props.elementType) {
        case 'input' :
        formElement = 
        <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control 
        className={elementClass.join(' ')}
        value={props.value}
        {...props.elementConfig}   //to be set in form element obj later//spread original attribute <Form.Control> has 
        onChange={props.change}
         /> 
         </Form.Group>
        break; 

        case 'email': 
        formElement =
       <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control 
        className={elementClass.join(' ')}
        value={props.value}
        {...props.elementConfig} 
        onChange={props.change}
        > 
        </Form.Control>
        </Form.Group>
        break;

        case 'select' : 
        formElement = (
        <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control 
        as="select"
        className = {elementClass.join('')}
        value = {props.value}
        onChange={props.change}>
        {props.elementConfig.options.map(option => (
        <option value={option.value} key={option.value}> 
        {option.displayValue}
        </option>
        ))} 
        </Form.Control>
        </Form.Group>
        );
        break; 

        
        default: 
        formElement = 
        <Form.Control 
        value={props.value}
        {...props.elementConfig}   //to be set in form element obj later 
        > 
        </Form.Control>;   
    }

    return (
        <Container>
        <Row>
        <Col lg={{ span:4, offset: 4 }}>
        {formElement}
        </Col>
        </Row>
        </Container>
    )

}

export default FormElement ; 