import React from 'react'
import CourseDashCard from '../../components/CourseDashCard/CourseDashCard'
import { useGlobalContext } from '../../context'
import useGet from '../../customHooks/useGet'
import CourseDashBoard from './CourseDashBoard'

function UserCourses() {
    const {localData} = useGlobalContext()
    const {getData} = useGet('/api/courses/user/' + localData.user._id)
     console.log(getData)
  return (
    <div className='container'>
        <CourseDashBoard />
        <div className='m-auto' style={{backgroundColor:'#EEC0C6', width:'90%', padding:10}}>
           {getData.length ? getData.map((course) => {
               return (
                   <CourseDashCard img={course.image} name={course.name}  />
               )
           }) : <CourseDashCard img={getData.image} name={getData.name} /> 
           }
        </div>
    </div>
  )
}

export default UserCourses