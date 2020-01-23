import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            error: ''
        }
    }

    _handleNameChange = event => {
        this.setState({
            username: event.currentTarget.value
        })
    }

    _handlePasswordChange = event => {
        this.setState({
            password: event.currentTarget.value
        })
    }
    _handleEmailChange = event => {
        this.setState({
            email: event.currentTarget.value
        })
    }
    _handlePhoneChange = event => {
        this.setState({
            phone: event.currentTarget.value
        })
    }

    handleSubmit = event => {
        // debugger
        console.log(this.state)
        if ( this.state.username && this.state.password) {
            let userData = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone
            }
            let emailRegex = new RegExp(/\S+@\S+\.\S+/)
            let mobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/

            if (!emailRegex.test(userData.email)) {
                this.setState({
                    error: 'Please enter valid e-mail ID!'
                })
            } else if (!mobileRegex.test(userData.phone)) {
                this.setState({
                    error: 'Please enter valid Phone number!'
                })
            } else {
                this.setState({
                    error: ''
                })
                let usersData = JSON.parse(localStorage.getItem("user")) || [];
                usersData.push(userData)
                localStorage.setItem('user', JSON.stringify(usersData));
                localStorage.setItem('loggedIn', JSON.stringify(userData));
                this.props.history.push('/profile')
            }
        } else {
            this.setState({
                error: 'Please fill all the mandatory fields!'
            })
        }
        event.preventDefault();
    }

    render () {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <div className="page-title">Register</div>
                    <label className="row">
                        Username *
                        <input className="register-input" type="text" value={this.state.username} onChange={this._handleNameChange} />
                    </label>
                    <label className="row">
                        Password *
                        <input className="register-input" type="password" value={this.state.password} onChange={this._handlePasswordChange} />
                    </label>
                    <label className="row">
                        Email *
                        <input className="register-input" type="email" value={this.state.email} onChange={this._handleEmailChange} />
                    </label>
                    <label className="row">
                        Phone *
                        <input className="register-input" type="tel" value={this.state.phone} onChange={this._handlePhoneChange} />
                    </label>
                    <input type="submit" value="Submit" className="submit-button" />
                    <div className="error-message">{this.state.error}</div>
                </form>
            </div>
        );
    }
}

export default Register;
