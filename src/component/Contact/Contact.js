import React, { Component } from 'react';
import FormElement from './FormElement'; 

class Contact extends Component { 

state={
    contactform: { 
        Name:{ 
            elementType: 'input',
            elementConfig: { 
                type:'text',
                placeholder:'Your name'
            },
            value: '',
            validation: {
                required: true, 
            },
            isValid: false,

        },
        Email:{ 
            elementType: 'input',
            elementConfig: { 
                type:'email',
                placeholder:'Your email'
            },
            value: ''
        },  
        Message:{ 
            elementType: 'input',
            elementConfig: { 
                type:'input',
                placeholder:'Your Message'
            },
            value: ''
    }

    
}}

//Handler 

onChangeHandler =(event, keyname)=>  {
    const updatedForm = {...this.state.contactform};
    const updatedFormElement = {
    ...updatedForm[keyname]
    }
    updatedFormElement.value = event.target.value;
    updatedFormElement.isValid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation); 

    updatedForm[keyname] = updatedFormElement; 
    console.log(updatedFormElement);
    this.setState({contactform: updatedForm });
}


checkValidity =(value, rules)=> { 
let isValid = true;   // set true first and then set it false 
if (!rules) { 
    return true}
if (rules.required) {     //= true 
 isValid = value.trim() !== "" && isValid;
}
return isValid     //** need to return sth ! 
}



render () {
    const contactfromArray =[]; 
    for (let key in this.state.contactform) { 
        contactfromArray.push({
            id: key, 
            value: this.state.contactform[key]
            })
    }




let contactform = (
    <form>
    {contactfromArray.map( formelement=> (
    <FormElement
    key={formelement.id}
    elementConfig={formelement.value.elementConfig}
    label={formelement.id}
    elementType={formelement.value.elementType}
    value={formelement.value.value}
    invalid={formelement.value.isValid}
    change ={(event)=> this.onChangeHandler(event,formelement.id)}
    />))}
    <button>Submit</button>
    </form> )

return ( 
    <div> 
    {contactform}
    </div>
 ) 
}}

export default Contact; 


