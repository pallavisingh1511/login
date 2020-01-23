import React from 'react';
import { Link } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Link to="/login" className="btn-login"><span>Login</span></Link>
        New User?<Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default App;
