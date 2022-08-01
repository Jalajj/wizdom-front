import React from 'react'

import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginFunc() {
   
    const responseGoogle =(response) => {
        console.log(response);
        axios({
            method:'POST',
            url:'http://localhost:4000/google/auth',
            data: {tokenId: response.credential}
        }).then((user) => {
            if(user.status === 200){
                localStorage.setItem("auth", JSON.stringify(user.data));
                window.location.reload(true)
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    const responseErrorGoogle = (err) => {
        console.log(err);
        window.alert(err)
    }
 

    return (
        <>
        <GoogleLogin
        onSuccess={responseGoogle}
        onError={responseErrorGoogle}
        />
    </>
    )
}

export default GoogleLoginFunc