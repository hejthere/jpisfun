import React from 'react';
import './FormElement.css'

const FormElement = props => {

    let formElement = null; 
    const elementClass = ['inputElement']; 
    if (!props.invalid) { 
        elementClass.push('Invalid');
        console.log(elementClass.join(' '))
    }

    switch (props.elementType) {
        case 'input' :
        formElement = <input 
        className={elementClass.join(' ')}
        value={props.value}
        {...props.elementConfig}   //to be set in form element obj later//spread original attribute <input> has 
        onChange={props.change}
         /> 
        break; 

        case 'email' : 
        formElement = <input 
        className={elementClass.join(' ')}
        value={props.value}
        {...props.elementConfig} 
        onChange={props.change}
        > 
        </input>; 
        break;

        case 'select' : 
        formElement = (
        <select 
        className = {elementClass.join('')}
        value = {props.value}
        onChange={props.change}>
        {props.elementConfig.options.map(option => (
        <option value={option.value} key={option.value}> 
        {option.displayValue}
        </option>
        ))} 
        </select>);
        break; 

        case 'textarea' : 
        formElement = <textarea 
        className={elementClass.join(' ')}
        value={props.value}
        {...props.elementConfig}   //to be set in form element obj later 
        onChange={props.change}
        > 
        </textarea>; 
        break; 
        
        default: 
        formElement = <input 
        value={props.value}
        {...props.elementConfig}   //to be set in form element obj later 
        > 
        </input>;   
    }

    return (
        <div className>
        <label>{props.label}</label>
        {formElement}
        </div>
    )

}

export default FormElement ; 