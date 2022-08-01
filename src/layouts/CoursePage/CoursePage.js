import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import useGet from '../../customHooks/useGet';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import { useGlobalContext } from '../../context';

function CoursePage() {
  const { courseId } = useParams();
  const [openModal, setOpenModal] = useState(false)
  const [hasBought, setHasBought] = useState(false)
  const [checkPay, setCheckPay] = useState(false)
  const [enrollment, setEnrollment] = useState('')
  const {getData} = useGet(`/api/courses/${courseId}`);
  const [priceId, setPriceId] = useState('')
  const {localData} = useGlobalContext()

  const getEnrollment = async (userId) => {
    try {
      const enroll = await axios.get(`http://localhost:4000/api/enrollment/course/${courseId}/${userId}`);
   console.log('Enroll', enroll)
   setEnrollment(enroll.data[0])
    } catch (error) {
      console.log(error)
    }
   
  }
    
   const stripePay = async () => {
    // try{
    //   const {data} = await axios.post('https://wizdom-qa.herokuapp.com/main/payment/stripe/61b74afd82bafd042478afad/629229a22c0a6cbcda374580')
    //   const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    //   stripe.redirectToCheckout({ sessionId: data });
    // }catch(err){
    //   console.log(err)
    // }
    try{
      const oneTimePay = await axios.get(`http://localhost:4000/payment/one/time/stripe/${courseId}/${localData.user._id}`)
      console.log(oneTimePay, 'one time')
      const session = await axios.post('http://localhost:4000/payment/checkout/session/' + localData.user._id, {priceId: oneTimePay.data.id})
      console.log(session, 'session')
      window.location.href = session.data.url
    }catch(err){
      console.log(err)
    }
  }

  const stripeInstallment = () => {
      console.log(priceId)
      axios.post('http://localhost:4000/payment/checkout/session/' + localData.user._id, {priceId}).then((checkout) => {
        console.log(checkout)
        window.location.href = checkout.data.url
      }).catch((err) => {
        console.log(err)
      })
  }


  const toggleModal = () => {
    axios.get('http://localhost:4000/payment/stripe/product/' + getData._id).then((prices) => {
      console.log(prices.data.default_price)
      setPriceId(prices.data.default_price)
    }).catch((err) => {
      console.log(err)
    })
    setOpenModal(!openModal);
  }

  const updatePay = async () => {
   const check = await axios.post(`http://localhost:4000/payment/check/ispaid/${courseId}/${localData.user._id}`)
   if(check.data.success === true){
    getEnrollment(check.data.user._id)
    console.log(check)
   }else{
    alert('there was an issue')
   }
  }

  useEffect(() => {
    if(localData){
      axios.get('http://localhost:4000/api/users/' + localData.user._id).then((user) => {
        if(user.data.stripeSession){
          setCheckPay(true)
        }else{
          setCheckPay(false)
          if(user.data.courseStatus.length){
            getEnrollment(user.data._id)
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [hasBought])

  useEffect(() => {
  
    if( getData.students && localData && getData.students.includes(localData.user._id)){
        setHasBought(true)
    }else{
       return;
    }
  }, [enrollment])


  return (
    <div className='container'>
     <div className='row'>
       <div className='col-md-6' style={{marginTop:150}}>
         <h1>{getData.name}</h1>
         <h4 className='mt-4'>Ratings</h4>
         <p className='mt-4'>This is an course introduction i don’t know we can add anything you want here </p>
         {hasBought ? <Link to={`/inside/course/main/${courseId}/${enrollment._id}`}><button className='btn btn-info mt-4' style={{width:'80%', color:'white'}}>Go to Course</button></Link>: 
         checkPay ? <button className='btn btn-info mt-4' style={{width:'80%', color:'white'}} onClick={() => updatePay()}>Enroll</button>:
         <button onClick={() => toggleModal()} className='btn btn-info mt-4' style={{width:'80%', color:'white'}}>Join Now</button>}
         <Modal isOpen={openModal} centered toggle={toggleModal}>
         <ModalHeader style={{marginLeft:'auto', border:'none'}}>
         <div>
         {/* <img src='https://img.icons8.com/fluency/2x/delete-sign.png'
     style={{height:'30px', width:'30px', cursor:'pointer'}}
     onClick={() => toggleModal()}></img> */}
         </div>
         </ModalHeader>
        
                <ModalBody  style={{borderRadius:'50px'}}>
                    <div className='card p-3 m-4' style={{cursor:'pointer'}} onClick={() => stripePay()}>One time payment</div>
                    <div className='card p-3 m-4'  style={{cursor:'pointer'}} onClick={() => stripeInstallment()}>Pay in Installment</div>
                </ModalBody>
  
          </Modal>
       </div>
       <div className='col-md-6'>
         <img style={{maxHeight:'85vh'}} src='https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='course photo' />
       </div>
     </div>
     {/* //Course details */}
     <div className='m-auto row mt-5' style={{display:'flex', justifyContent:'space-around'}}>
       <div className='card col-md-3 text-center'>
       <p className='mt-4'> Duration </p>
       </div>
       <div className='card col-md-3 text-center'>
         <p className='mt-4'>Course Cost</p>
         <p style={{fontWeight:700}}>{getData.price}</p>
       </div>
       <div className='card col-md-3 text-center'>
       <p className='mt-4'> Total Enrolled </p>
       </div>
     </div>
     {/* Course description and other courses */}
     <div className='m-auto mt-5' style={{height: 50,display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'space-around', backgroundColor:'white'}}>
       <div style={{marginRight:100}}>Overview</div>
       <div style={{marginRight:100}}>Requirements</div>
       <div>More Courses</div>
       
       </div>
    {/* Content of the course description */}
    <div style={{marginLeft:100, marginRight:100, marginTop:50, marginBottom:50}}>

   <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
   <p style={{width:'90%', marginTop:30}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
   with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
    </div>
  )
}

export default CoursePage