import React from 'react'
import './footer.css'

function Footer() {
  return (
 
 <div className={'footer'}>
      <div className={'flexWrapperOne'}>
        <p className={'logo'}>WisdomQA.</p>
        <p
          className={
            'collaborationPlatformForModernTeams'
          }
        >
          Collaboration platform for modern teams.
        </p>
        <p className={'copyrightWizdomqaInc'}>
          © Copyright WizdomQA Inc.
        </p>
      </div>
      <div className={'group71'}>
        <p className={'company'}>Company</p>
        <p className={'aboutUs'}>About Us</p>
        <p className={'careers'}>Careers</p>
        <p className={'careers'}>Support</p>
        <p className={'careers'}>Knowledgebase</p>
      </div>
      <div className={'group72'}>
        <p className={'company'}>Features</p>
        <p className={'careers'}>Screen Sharing</p>
        <p className={'careers'}>
          iOS &amp; Android Apps
        </p>
        <p className={'careers'}>File Sharing</p>
        <p className={'careers'}>User Management</p>
      </div>
      <div className={'group7'}>
        <p className={'contactUs'}>Contact Us</p>
        <p className={'infoCom'}>
          info&#64;teamapp.com
        </p>
        <p className={'infoCom'}>1-800-200-300</p>
        <p
          className={
            'num1010SunsetBlvPaloAltoCalifornia'
          }
        >
          1010 Sunset Blv.
          <br />
          Palo Alto, California
        </p>
      </div>
      <div className={'flexWrapperTwo'}>
        <p className={'stayUpToDate'}>
          Stay up to date
        </p>
        <p className={'subscribeToOurNewsletter'}>
          Subscribe to our newsletter
        </p>
        {/* <div className={'group17'}>
          <p className={'email'}>Email</p>
          <img
            alt=""
            className={'vector'}
            src="https://static.overlay-tech.com/assets/61494629-77d3-46b3-bb97-2373aa746a50.svg"
          />
        </div> */}
      </div>
    </div>
   
  )
}

export default Footer