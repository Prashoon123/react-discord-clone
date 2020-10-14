import React from 'react';
import './Login.css';
import login__logo from './800px-Discord_logo.svg.png';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        // do clever google login stuff...
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src={login__logo} alt=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
