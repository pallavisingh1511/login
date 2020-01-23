import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    _logout = () => {
        localStorage.removeItem('loggedIn');
        this.props.history.push('/')
    }
    _getUserData() {
        let userData = JSON.parse(localStorage.getItem("loggedIn"));
        if (userData) {
            return (
                <div className="user-data">
                    <div>You have successfully logged-in</div>
                    <div>Welcome {userData.username} !</div>
                    {userData.email && <div>E-mail: {userData.email}</div>}
                    {userData.phone && <div>Phone: {userData.phone}</div>}
                </div>
            )
        } else {
            this.props.history.push('/')
        }

    }
    render () {
        return (
            <div className="profile-container">
                {this._getUserData()}
                <div className="btn-signout" onClick={this._logout}>Sign out</div>
            </div>
        )
    }
}

export default Profile