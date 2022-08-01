import React from 'react'
import './payment.css'

function PaymentSuccess() {
  return (
    <div className="container">
   <div className="row">
      <div className="col-md-6 mx-auto mt-5 mb-5">
         <div className="payment">
            <div className="payment_header">
               <div className="check"><i className="fa fa-check" aria-hidden="true"></i></div>
            </div>
            <div className="content">
               <h1>Payment Success !</h1>
               <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
               <a href="/">Go to Home</a>
            </div>
            
         </div>
      </div>
   </div>
</div>
  )
}

export default PaymentSuccess