import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context';

import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import { GoogleOAuthProvider } from '@react-oauth/google';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <GoogleOAuthProvider clientId='1093292999456-patj3jj78sliobn7vpgv051ss1khicmb.apps.googleusercontent.com'>
  <AppProvider>
    
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
    
  </AppProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
