import React from 'react'
import './course-dash-card.css'
import {Link} from 'react-router-dom'

function CourseDashCard({img, name}) {
  return (
    <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
       
           <div className='col-md-11'>
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded ">
                <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70px" /></div>
                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{name}</span>
                    
                </div>
               
                <div>
                <Link to='/modules' style={{marginRight:'30px'}}><img style={{cursor:'pointer', height:30}} src='https://img.icons8.com/fluency/2x/play.png' alt='play' /></Link>
                </div>
                {/* <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div> */}
            </div>
            
         
           
            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button style={{background: 'linear-gradient(251deg,rgba(11, 190, 242, 1) 1%, rgba(11, 190, 242, 1) 96%)'}} className="btn btn-primary btn-block btn-lg ml-2 pay-button" type="button">Add More Courses</button></div>
            </div>
    </div>
</div>
  )
}

export default CourseDashCard
