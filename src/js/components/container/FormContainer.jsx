import React, { Component } from 'react';
import { Input } from 'antd';
import ReactDOM from 'react-dom';

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
        };
    }

    handleInputChange = (attr) => (e) => {
        this.setState({
            [attr]: e.target.value,
        })
    };

    render() {
        return (
            <form id="article-form">
                <Input value={this.state.title} onChange={this.handleInputChange('title')}></Input>
            </form>
        );
    }
}

export default FormContainer;