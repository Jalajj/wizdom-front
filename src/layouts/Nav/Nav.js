import React, {useState} from "react";
import { Link } from "react-router-dom";
import BasicModal from "../../components/BasicModal/BasicModal";
import './nav.css';
import axios from 'axios'


const Nav = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const retrievePayment = async () => {
    const payment = await axios.post('http://localhost:4000/payment/stripe/retrieve/61b74afd82bafd042478afad/629229a22c0a6cbcda374580')
    console.log(payment.data)
  }

  return (
    <div className={'navTwo'}>
      <div className={'navBar'}>
      <div>
      <p className={'wizdomqa'}>WIZDOMQA.</p>
      </div>
    
        <div className={'nav'} style={{marginLeft:250}}>
          <div className={'navBar'}>
            <Link to='/inside-course'style={{textDecoration:'none'}} className={'home'}>Home</Link>
            <Link to='/courses' style={{textDecoration:'none'}} className={'courses'}>Courses</Link>
            <Link to='/modules' style={{textDecoration:'none'}} className={'blog'}>Blog</Link>
            <Link to='/about' style={{textDecoration:'none'}} className={'aboutUs'}>About</Link>
            <p onClick={() => retrievePayment()}>retrieve</p>
            {/* <img
              alt=""
              className={'blog'}
              src="https://static.overlay-tech.com/assets/71ca5bdc-2948-4c4f-9238-af1a8d23bad9.png"
            />
            <img
              alt=""
              className={'aboutUs'}
              src="https://static.overlay-tech.com/assets/78bb80a7-f880-4e06-889c-8990c9c679df.png"
            />
            <img
              alt=""
              className={'contactUs'}
              src="https://static.overlay-tech.com/assets/17332fcb-a446-427e-899c-23fa937e2b74.png"
            /> */}
          </div>
          {/* <div className={'line17'} /> */}
        </div>
        <div className={'button2'} style={{cursor:'pointer'}}>
          <p className={'getAcess'} onClick={ () => setShowModal(true)}>Get Access</p>
        </div>
       <BasicModal open={showModal} toggle={toggleModal} />
      </div>
     
    </div>
  );
};

export default Nav;