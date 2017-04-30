import React, { Component } from 'react';

class CustomerFormSubmit extends Component {

    submitCustomerForm() {
        console.log('Form submitted');
        //Implement Api call to submit and get UUID
    }
    render() {
        return (<button type="btn btn-success" className="btn btn-primary" onClick={this.submitCustomerForm.bind(this)}>Submit</button>);
    }
}
export default CustomerFormSubmit;