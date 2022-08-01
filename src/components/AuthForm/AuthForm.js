import React from 'react'
import './authform.css'
import { useHttpClient } from './../../customHooks/http-hook';
import { useState } from 'react';
import { useGlobalContext } from '../../context';
import GoogleLoginFunc from './GoogleLogin';
// import GoogleLogin from 'react-google-login';
// import axios from "axios";
// import ErrorToast from '../ErrorToast/ErrorToast';
// import GoogleLoginFunc from './GoogleLogin';

function AuthForm({toggle}) {
    const [userData, setUserData] = useState({
        username: '',
        email:'',
        password: ''
    })
    const [signIn , setSignIn] = useState(false)
    const { setErrors, errors, isLoading, setIsLoading} = useGlobalContext()
    const {sendRequest} = useHttpClient();
    
    const register = (e) => {
        e.preventDefault()
        sendRequest(`http://localhost:4000/${signIn ? 'auth/signin': 'api/users'}`, 'POST',  JSON.stringify(userData) , 
        {
          'Content-Type': 'application/json'
        }).then((resp) => {
            if(resp.error){
                setErrors(resp.error)
            }
            else if(signIn){
               
                localStorage.setItem('auth', JSON.stringify(resp));
               
                toggle()
                 window.location.href = window.location.href;
            }else{
                 setSignIn(true)
            }
        }).catch((err) => {
            setErrors(err)
            console.log(err)
        })
    }

  return (
    <div className="signup-form">
    
    <form>
		<h2 style={{color: '#3C4862'}}>{signIn ? 'SIGN IN' : 'Register'}</h2>
		{/* <p className="hint-text">{signIn ? null : 'Create your account.'} It's free and only takes a minute.</p> */}
        <div className="m-3" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <GoogleLoginFunc />
            </div>
       { signIn ? null : <div className="form-group">
			<div className="row">
				<div className="col-xs-6">
                <input onChange={e  => {setUserData({...userData, username: e.target.value})}} type="text" className="form-control" name="first_name" placeholder="Username" required="required" />
                </div>
				{/* <div className="col-xs-6 mt-3">
                <input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" /></div> */}
			</div>        	
        </div>}
        <div className="form-group">
        	<input onChange={e  => {setUserData({...userData, email: e.target.value})}} type="email" className="form-control" name="email" placeholder="Email" required="required" />
        </div>
		<div className="form-group">
            <input onChange={e  => {setUserData({...userData, password: e.target.value})}} type="password" className="form-control" name="password" placeholder="Password" required="required" />
        </div>
		{/* <div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
        </div>         */}
        {/* <div className="form-group">
			<label className="checkbox-inline">
            <input type="checkbox" required="required" /> I accept the <a href='/'>Terms of Use</a> &amp; <a href='/'>Privacy Policy</a></label>
		</div> */}
		<div className="form-group text-center">
            <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e) => register(e)}>{signIn ? 'Login' : 'Register Now'}</button>
        </div>
    </form>
	<div className="text-center">{signIn ? 'Dont have an account' : 'Already have an account?'}<p className='text-primary' style={{cursor:'pointer'}} onClick={() => setSignIn(!signIn)}>{signIn ? 'Sign Up' : 'Sign In'}</p></div>
</div>
  )
}

export default AuthForm