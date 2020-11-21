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

        case 'textarea' : 
        formElement = <textarea 
        className={elementClass.join(' ')}
        value={props.value}
        {...props.elementConfig}   //to be set in form element obj later 
        onChange={props.change}
        > 
        </textarea>; 
        break; 
        
        case 'select': 
        formElement = <select
        value={props.value}
        {...props.elementConfig} >
        <option> </option>
        </select>
        break; 
        
        default : 
        case 'input' : 
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