import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';

class InputWithValidation extends Component {

    render() {
        let inputBox;
        switch (this.props.type) {
            case 'text':
                inputBox = <div className="form-group">
                    <input placeholder={this.props.placeholder} type='text' className='form-control' />
                </div>
                break;
            case 'toggle':
                inputBox = <div className="form-group"><Toggle label={this.props.label}></Toggle></div>
                break;
            case 'radio':
                inputBox = <label className="radio-inline">
                    <input type="radio" value={this.props.value} />
                    {this.props.label}
                </label>
                break;
            default: throw { message: 'Invalid Input type' };
        }
        return (inputBox);
    };
}

export default InputWithValidation;