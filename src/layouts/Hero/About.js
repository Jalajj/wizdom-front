import React from 'react'
import celeb from '../../images/13.png'
import './about.css'

function About() {
  return (
    <div className='container'>
      <div className='row'>
          <div className='col-md-6'>
              <img style={{height: 603, width:600, objectFit:'cover'}} src={celeb} alt='inspiration' />
          </div>
          <div className='col-md-5 para-about' style={{marginLeft:100}}>
          <h3 className='para-about-title' style={{marginTop:150, color: '#3C4862'}}>Learn A Skill, Build Your Portfolio.</h3>
                <p className='para-about-subtitle mt-4'  style={{width:'80%', lineHeight:2}}>
                Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. 
                Multimedia and CAD design.
                </p>
                <div className={'button2 mt-4'}>
          <p className={'getAcess'}>Get Access</p>
        </div>
          </div>
      </div>
    </div>
  )
}

export default About