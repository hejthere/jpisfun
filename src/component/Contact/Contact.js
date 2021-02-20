import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FormElement from './FormElement';

class Contact extends Component {

    state = {
        contactform: {
            Title: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Mr.', displayValue: 'Mr.' },
                        { value: 'Ms.', displayValue: 'Ms.' },
                        { value: 'Mrs.', displayValue: 'Mrs.' }
                    ]
                },
                value: '',
                validation: {
                    required: true,

                },
                isValid: false
            },

            Name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true,

                },
                isValid: false,
                touched: false,

            },
            Email: {
                elementType: 'email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true,

                }, touched: false,
            },
            Message: {
                elementType: 'input',
                elementConfig: {
                    type: 'input',
                    placeholder: 'Your Message'
                },
                value: '',
                validation: {
                    required: true,

                }, touched: false,
            }


        }
    }

    //Handler 

    onChangeHandler = (event, keyname) => {
        const updatedForm = { ...this.state.contactform };
        const updatedFormElement = {
            ...updatedForm[keyname]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;

        updatedForm[keyname] = updatedFormElement;
        console.log(updatedFormElement);
        this.setState({ contactform: updatedForm });
    }


    checkValidity = (value, rules) => {
        let isValid = true;   // set true first and then set it false 
        if (!rules) {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        return isValid
    }

    submitHandler = (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will contact you soon!')
    }


    render() {
        const contactfromArray = [];
        for (let key in this.state.contactform) {
            contactfromArray.push({
                id: key,
                value: this.state.contactform[key]
            })
        }

        let contactform = (
            <form>
                {contactfromArray.map(formElement => (
                    <FormElement
                        key={formElement.id}
                        elementConfig={formElement.value.elementConfig}
                        label={formElement.id}
                        elementType={formElement.value.elementType}
                        value={formElement.value.value}
                        invalid={formElement.value.isValid}
                        change={(event) => this.onChangeHandler(event, formElement.id)}
                        touched={formElement.value.touched}
                    />))}
                <br />
                <Button onClick={this.submitHandler} className="submitButton">Submit</Button>
                <br />
            </form>
        )

        return (
            <div>
                {contactform}
                <br />
            </div>
        )
    }
}

export default Contact;


