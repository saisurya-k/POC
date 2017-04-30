import React, { Component } from 'react';
import InputWithValidation from './InputWithValidation';
import CustomerFormSubmit from './CustomerFormSubmit';
class CustomerForm extends Component {
    render() {
        return (
            <div className="text-center">
                <form name="customerForm" className="col-sm-6">
                    <InputWithValidation name="name" placeholder="Enter your name" regexPattern="Enter your name" type="text" />
                    <InputWithValidation name="email" placeholder="Enter your email-id" regexPattern="" type="text" />
                    <InputWithValidation name="phone" placeholder="Enter mobile Number" regexPattern="" type="text" />
                    <CustomerFormSubmit />
                </form>
            </div>
        );
    }
}
export default CustomerForm;