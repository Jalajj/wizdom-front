import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../../components/CourseCard/CourseCard'
import TempCourseCard from '../../components/CourseCard/TempCourseCard'
import useGet from '../../customHooks/useGet'


function OfferedCourses() {
  
  const {getData} = useGet('/api/courses/get/limit')
 

    
  return (
    <div>
        <h2 className='text-center' style={{color: '#3C4862'}}>Courses We Offer</h2>
        <div className='row' style={{padding:50}}>
      {getData && getData.map((course) => {
        return (
          <div className='col-md-4'>
            {/* <CourseCard course={course} /> */}
            <TempCourseCard course={course} />
          </div>
        )
      })}
      </div>
      <div className='text-center m-auto'>
     <Link to='/courses' className='button2 p-3'><button className=' btn text-white '>See more courses</button></Link>
      </div>
    </div>
  )
}

export default OfferedCourses