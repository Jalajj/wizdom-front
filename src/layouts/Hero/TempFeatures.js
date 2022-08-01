import React from 'react'
import './feature.css'

function TempFeatures() {
  return (
    <div className='container' style={{paddingLeft:80}}>
        <div className='m-auto feature-container' style={{display:'flex', alignItems:'center', justifyContent:'space-around', flexDirection:'row'}}>
         <div className='m-auto' style={{width:300}}>
         <img
        alt=""
        className={'icons'}
        src="https://static.overlay-tech.com/assets/cfc6bcef-10db-4301-938a-318e9ca6979d.svg"
      />
      <p className={'unlimitedAccess '}>
        Unlimited Access
      </p>
      <p
        className={'oneSubscriptionUnlimitedAccess'}
      >
        One subscription unlimited access
      </p>
         </div>
         <div className='m-auto' style={{width:300}}>
         <div className={'icon'}>
        <img
          alt=""
          className={'rectangle3'}
          src="https://static.overlay-tech.com/assets/e12192df-1f53-4ac5-8315-6c53cf395a78.svg"
        />
        <img
          alt=""
          className={'group10'}
          src="https://static.overlay-tech.com/assets/5869cd28-ffc5-42f6-9056-c7aa9731744c.svg"
        />
      </div>
      <p className={'expertTeachers'}>
        Expert Teachers
      </p>
      <p
        className={
          'learnFromIndustryExpertsWhoArePass'
        }
      >
        Learn from industry experts who are passionate
        about teaching
      </p>
         </div>
         <div className='m-auto'>
         <div className={'icon'}>
        <img
          alt=""
          className={'rectangle4'}
          src="https://static.overlay-tech.com/assets/715281aa-1232-4cdf-a509-def26ffabd22.svg"
        />
        <img
          alt=""
          className={'group25'}
          src="https://static.overlay-tech.com/assets/fc4476b2-9387-4beb-92d4-32ac6f3b51cc.svg"
        />
      </div>
      <p className={'learnAnywhere'}>
        Learn Anywhere
      </p>
      <p
        className={
          'switchBetweenYourComputerTabletOr'
        }
      >
        Switch between your computer, tablet, or mobile
        device.
      </p>
         </div>
        </div>
    </div>
  )
}

export default TempFeatures