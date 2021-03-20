import React from 'react'
import './Login.css';
function formSubmit(e)
{
    <h1>Logged in</h1>
}
function Login() {
    return (
        <div>
            <div className='login'>
                <form action='' method='POST' id='login-form'>
                    <div><label for='Email'>Email</label></div>
                    <input type='email' name='email' placeholder='Enter your email'/>
                    <div><label for='password'>Password</label></div>
                    <input type='password' name='password' placeholder='Enter your password'/>
                    <button id='submit-button' type='submit' onClick={formSubmit()}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
