import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class Login extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            password: '',
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
    _login = (event) => {
        let usersData = JSON.parse(localStorage.getItem("user")) || [];
        let _this = this
        let currentUser = usersData.find(function(o){return o["username"] === _this.state.username && o["password"] === _this.state.password;})
        if (currentUser) {
            this.setState({
                error: ''
            })
            localStorage.setItem('loggedIn', JSON.stringify(currentUser));
            this.props.history.push('/profile')
        } else {
            this.setState({
                error: 'User Not Found!'
            })
        }
        event.preventDefault();
    }

    render () {
        return (
            <div className="form-container">
                <form onSubmit={this._login} className="login-form">
                    <div className="page-title">Login</div>
                    <label className="row">
                        Name
                        <input className="login-input" type="text" value={this.state.username} onChange={this._handleNameChange} />
                    </label>
                    <label className="row">
                        Password
                        <input className="login-input" type="password" value={this.state.password} onChange={this._handlePasswordChange} />
                    </label>
                    <input type="submit" value="Submit" className="submit-button" />
                    {
                        this.state.error &&
                        <>
                            <div className="error">
                                {this.state.error}
                            </div>
                            New User?<Link to="/register">Register</Link>
                        </>

                    }
                </form>
            </div>
        );
    }
}

export default Login;
