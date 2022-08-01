import React from 'react';
import './hero.css';
import hero from '../../images/hero.png'
import TempFeatures from './TempFeatures';
import Achievements from './Achievements';
import About from './About';
import TempAchievement from './TempAchievement';
import ReviewCarousel from './ReviewCarousel';
import OfferedCourses from './OfferedCourses';
import main from '../../images/main-home.png'
import TempReviewCarousel from './TempReviewCarousel';

function Hero() {
  return (
    <div className='container'>
        <div className='row' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='col-md-7' style={{height:'80vh'}}>
                <h1 className='hero-title' style={{marginTop:150}}>Get Access to Unlimited Educational Resources. Everywhere, Everytime!</h1>
                <p className='hero-subtitle mt-4' style={{width:'60%'}}>premium access to more than 10,000 resources ranging from courses, events e.t.c.</p>
                <div className={'button2'}>
          <p className={'getAcess'}>Get Access</p>
        </div>
            </div>
            <div className='col-md-5'>
            <img src={main} alt='home' />
                {/* <img className='hero-img' src={hero} alt='hero-section' style={{height:400, width:550, objectFit:'cover'}} /> */}
            </div>
        </div>
        {/* //Features */}
        <div className='m-auto mt-5' style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
          <TempFeatures />
        </div>
        <div className='mt-5'>
          <OfferedCourses />
        </div>
        <div className='about-container' style={{marginTop:-30}}>
          <About />
        </div>
        {/* <div className='achivements-container' style={{marginTop:100, marginBottom:100}}>
          {/* <Achievements /> 
          <TempAchievement />
        </div> */}
        <div className='review-carousel-container' style={{marginTop:100, marginBottom:100}}>
          {/* <ReviewCarousel /> */}
          <TempReviewCarousel />
        </div>
    </div>
  )
}

export default Hero