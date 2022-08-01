import React from 'react'
import about from '../../images/pack2.svg'
import './aboutpage.css'

function AboutPage() {

  return (
    <div className='container'>
      <div className='m-auto mb-5'>
          <div className='col-md-7 about-intro' style={{display:'inline-block', marginTop:100}}>
          <h1>About Wizdom QA.</h1>
    
         <p className='mt-4' style={{width:'80%'}}>
         You have variety of courses to choose from in wisdom QA Project discussions, important documents, scalable application depends upon testing. 
         With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person.
         </p>
          </div>
          <div className='col-md-4' style={{display:'inline-block'}}>
              <img src={about} alt='about' style={{height:400, width:400, objectFit:'cover'}} />
          </div>
      </div>
      <div className='m-auto about-main-container' style={{backgroundColor:'white', padding:50}}>
     
        <div className='m-auto row'>
          <div className='col-md-8 about-main' style={{marginTop:100}}>
          <h1 className='m-auto'>Our Story</h1>
            <p className='mt-4 about-main-para' style={{width:'80%'}}>You have variety of courses to choose from in wisdom QA Project discussions, important documents, scalable application depends upon testing. 
            With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person.
            With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person.
            With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person.
            </p>
          </div>
          <div className='col-md-4'>
            <img src={about} alt='Owner photo' style={{height:400, width:300, objectFit:'cover'}} />
          </div>
        </div>
        <div className='m-auto mt-5 about-main-para' style={{marginTop:100}}>
        You have variety of courses to choose from in wisdom QA Project discussions, important documents, scalable application depends upon testing. 
        With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person
        </div>
        <div className='m-auto mt-3 about-main-para'>
        You have variety of courses to choose from in wisdom QA Project discussions, important documents, scalable application depends upon testing. 
        With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person
        </div>
        <div className='m-auto mt-3 about-main-para'>
        You have variety of courses to choose from in wisdom QA Project discussions, important documents, scalable application depends upon testing. 
        With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person
        </div>
      </div>
    </div>
  )
}

export default AboutPage