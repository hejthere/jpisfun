import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FormElement from './FormElement';

class Contact extends Component {

    state = {
        contactForm: {
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

    onChangeHandler = (event, keyName) => {
        const updatedForm = { ...this.state.contactForm };
        const updatedFormElement = {
            ...updatedForm[keyName]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;

        updatedForm[keyName] = updatedFormElement;
        this.setState({ contactForm: updatedForm });
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
        const contactFromArray = [];
        for (let key in this.state.contactForm) {
            contactFromArray.push({
                id: key,
                value: this.state.contactForm[key]
            })
        }

        let contactForm = (
            <form>
                {contactFromArray.map(formElement => (
                    <FormElement
                        key={formElement.id}
                        elementConfig={formElement.value.elementConfig}
                        label={formElement.id}
                        elementType={formElement.value.elementType}
                        value={formElement.value.value}
                        isValid={formElement.value.isValid}
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
                {contactForm}
                <br />
            </div>
        )
    }
}

export default Contact;


