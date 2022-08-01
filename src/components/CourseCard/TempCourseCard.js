import React from 'react'
import './tempcard.css'
import { Link } from 'react-router-dom'

function TempCourseCard({course}) {
  return (
    <div>
   
    <div className="card-main">
      <img src={course.image || "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=400"} className="card__image" alt="course" />
      <div className="card__overlay">
        <div className="card__header">
          {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
          <div className="card__header-text">
          <Link to={`/course/${course._id}`} style={{textDecoration:'none'}}><h3 className="card__title">{course.name}</h3></Link>      
            <span className="card__status">{course.category}</span>
          </div>
        </div>
        <p className="card__description">{course.description.substr(0, 30)}...</p>
      </div>
    </div>      
  
    </div>
  )
}

export default TempCourseCard