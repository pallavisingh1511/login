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

    handleNameChange = event => {
        this.setState({
            username: event.currentTarget.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.currentTarget.value
        })
    }

    handleSubmit = event => {
        // debugger
        console.log(this.state)
        if ( this.state.username && this.state.password){
            let userData = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone
            }
            let usersData = JSON.parse(localStorage.getItem("user")) || [];
            usersData.push(userData)
            localStorage.setItem('user', JSON.stringify(usersData));
        }
        event.preventDefault();
    }

    render () {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <div className="page-title">Register</div>
                    <label className="row">
                        Name
                        <input className="register-input" type="text" value={this.state.username} onChange={this.handleNameChange} />
                    </label>
                    <label className="row">
                        Password
                        <input className="register-input" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    {/* <label className="row">
                        Email
                        <input type="text" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <label className="row">
                        Phone
                        <input type="text" value={this.state.username} onChange={this.handleChange} />
                    </label> */}
                    <input type="submit" value="Submit" className="submit-button" />
                </form>
            </div>
        );
    }
}

export default Register;
