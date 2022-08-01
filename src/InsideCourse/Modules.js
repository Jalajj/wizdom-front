import React, {useState} from 'react'
import {UncontrolledCollapse } from 'reactstrap'
import useGet from './../customHooks/useGet';
import {Link} from 'react-router-dom'

function Modules() {
    const {showLesson, setShowLesson} = useState(false)
 const {getData} = useGet(`/api/courses/modules/629229a22c0a6cbcda374580`)
  return (
    <div className='container' style={{margin:100}}>
    {getData && getData.map((modules, i) => {
        return (
            <div className='card' key={i} style={{padding:20}}>
            <div style={{display:'flex', flexDirection:'row'}}>
            <h1 className='ml-2'>{modules.name}</h1>
         
            <Link to='/inside/course' style={{marginLeft:'auto', marginRight:20, cursor:'pointer', fontSize:30, textDecoration:'none', color:'black'}} id="toggler"  onClick={() => setShowLesson(true)}>+</Link>
            </div>
            
        </div>
        )
    })}
       
    </div>
  )
}

export default Modules
{/* <UncontrolledCollapse toggler="#toggler">
                 <div className='mt-3'>
                     <h4 className='card p-2'>Lesson 1</h4>
                     <h4 className='card p-2 mt-3'>Lesson 2</h4>
                     <h4 className='card p-2 mt-3'>Lesson 3</h4>
                 </div>
            </UncontrolledCollapse> */}