import React from 'react'
import './achievements.css'

function Achievements() {
  return (
    <div className={'achievement'}>
    <div className={'vector'} />
    <div className={'group88'}>
      <div className={'group86'}>
        <p className={'num5679'}>5,679</p>
        <p className={'registeredStudents'}>
          Registered Students
        </p>
      </div>
      <div className={'group85'}>
        <p className={'num5679'}>2,679</p>
        <p
          className={
            'studentHasBeenHelpedToAchieveTheir'
          }
        >
          Student has been helped to achieve their dreams
        </p>
      </div>
      <div className={'group84'}>
        <p className={'num10000'}>10,000</p>
        <p
          className={
            'moreThan10000PeopleVisitsOurSite'
          }
        >
          More than 10,000 people visits our site monthly
        </p>
      </div>
      <div className={'group85'}>
        <p className={'num10'}>#10</p>
        <p
          className={
            'rankedAmongTheTop10GrowingOnlineL'
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

export default Achievements