import DropIn from "braintree-web-drop-in-react";

//get client token from braintree api 
let clientToken;

//use this state to save clientToken
const [data, setData] = useState({
    success:false, 
    clientToken:null,
    error:'',
    instance: {},
    address: ''
})
 
const buy = () => {
    //nonce = data.instance.requestPaymentMethod()
    //send the nonce to your server 
    let nonce;
    let getNonce = data.instance.requestPaymentMethod().then(data => {
        console.log(data)
        nonce = data.nonce
        //once you send nonce (Card type, card number) send nonce as 'paymentMethodNonce'
        // and also total to be charged
        console.log('send nonce and total to process', nonce, totalAmountToBePaid)
        const paymentData = {
            paymentMethodNonce: nonce,
            amount : totalAmountToBePaid
        }
        //Here to a post api call on process payment and send and receive data
    }) 
}


//Credit Card checkout layout

const showDropIn = () => {

    return (
        <div>
       {clientToken !== null && (
           <div>
            <DropIn options={{
                authorization: clientToken
            }}
            onInstance={instance => data.instance = instance}    
            />
          
           </div>
       )}
        </div>
    )
}

