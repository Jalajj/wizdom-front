import React from 'react';
import { Link } from 'react-router-dom';
import './course-card.css'

function CourseCard({course}) {
  return (
    // style={{background:`url(${course.image || 'https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600'}) no-repeat`,}}
    <div className={'course'}>
     
      <div className={'courseType'}>
        <p className={'free'}>{course.category}</p>
      </div>
      <img src={course.image || 'https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600'} />
      <Link to={`/course/${course._id}`} className={'courseInfo'} style={{textDecoration:'none'}}>
        {/* <p className={'free'}> */}
          {course.name}
        {/* </p> */}
      </Link>
    </div>
  )
}

export default CourseCard