import React from 'react'
import './tempAchievement.css'

function TempAchievement() {
  return (
    <div className='container achievement-container'>
       <div className='m-auto feature-container' style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
       <div className={'group86 m-auto'}>
        <p className={'num5679 m-auto'}>5,679</p>
        <p className={'registeredStudents m-auto'}>
          Registered Students
        </p>
      </div>
      <div className={'group85 m-auto'}>
        <p className={'num5679 m-auto'}>2,679</p>
        <p
          className={
            'studentHasBeenHelpedToAchieveTheir m-auto'
          }
        >
          Student has been helped to achieve their dreams
        </p>
      </div>
      <div className={'group84 m-auto'}>
        <p className={'num10000 m-auto'}>10,000</p>
        <p
          className={
            'moreThan10000PeopleVisitsOurSite m-auto'
          }
        >
          More than 10,000 people visits our site monthly
        </p>
      </div>
      <div className={'group85 m-auto'}>
        <p className='hash-10'>#10</p>
        <p
          className={
            'rankedAmongTheTop10GrowingOnlineL m-auto'
          }
        >
          Ranked among the top 10 growing online learning
          startups in West Africa
        </p>
      </div>
       </div>
    </div>
  )
}

export default TempAchievement