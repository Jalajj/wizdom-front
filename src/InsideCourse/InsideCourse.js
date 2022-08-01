import React, {useEffect, useState } from 'react'
import useGet from './../customHooks/useGet';
import {Badge} from 'reactstrap'
import axios from 'axios'
import {Toast, Button, UncontrolledCollapse, Card, CardBody} from 'reactstrap'


function InsideCourse() {
  //  const [lessonChange, setLessonChange] = useState(false);
   const [index, setIndex] = useState(0)
   
   const [updateChange, setUpdateChange] = useState(false)
   const [completedLessons, setCompletedLessons] = useState(null)

   const [allLessons, setAllLessons] = useState([])

  const {getData, fetchGetData} = useGet(`/api/courses/modules/62cc115f1091bd44c9697e3b`);

  const [lessonNumber, setLessonNumber] = useState(null)

  console.log(getData)

  useEffect(() => {
    fetchGetData()
  }, [index]);

  const updateLessonStatus = (id) => {
   setUpdateChange(true)
    const filterClicked = allLessons.filter((completed) => {
      if(completed.lesson == id){
        return completed
      }})
      console.log(filterClicked)
     axios.put(`https://wizdom-qa.herokuapp.com/api/enrollment/complete/62cc19384ba9f181f42abae5/62cc118506fd5e895107689d/62cd5dcbc1c9f683b02d4643`)
     .then((enrollment) => {
      
        console.log(enrollment)
        setUpdateChange(false)
     }).catch((err) => {
       console.log(err);
     })
  }


  useEffect(() => {
    axios.get('http://localhost:4000/api/enrollment/62ce86619faa2322d3c3c648').then((enrollment) => {
      console.log('enrollment', enrollment)
        // console.log(enrollment.data.lessonStatus)
    //  const filtered =   enrollment.data.lessonStatus.filter((data) => data.complete === true)
    const filtered = enrollment.data.completedLessons;
    if(getData.length){
      console.log('lessons', getData.lessons)
      setAllLessons(getData.lessons)
    }
       console.log('Completed ', filtered)
        setCompletedLessons(filtered)
        // console.log(enrollment.data.lessonStatus, 'all lessons')
    }).catch((err) => {
      console.log(err)
    })
  }, [updateChange])

  // const returnComplete = () => {
  //   if(completedLessons){
  //     return completedLessons.map((completed) => completed.lesson)
  //   } else{
  //     return allLessons
  //   }
  // }


  const lessonClicked = (url) => {
    // setIndex(i)
    // setLessonChange(true);
    setLessonNumber(url)
  }

  return (
    <div className='container'>
  {updateChange && <Toast delay={5000} show={updateChange} animation={true}> 
     <h5>Marked as completed</h5>
    </Toast>}
        <div className='row' style={{marginTop:50, marginBottom:50}}>
            <div className='col-md-8'>
           {getData[0] && <iframe
        src={lessonNumber || getData[0].lessons[0].resource_url}
        frameBorder="0"
        // height='500px'
        // width='800px'
        style={{height:'100%', width:'100%', margin:'auto'}}
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />}
        {/* src={ setLessonNumber > 0 ? getData[0].lessons[lessonNumber].resource_url : getData[0].lessons[0].resource_url} */}
            </div>
            <div className='col-md-4'>
                <div className='card' style={{height:500, padding:20, overflowY:'scroll'}}>
                {getData.length && getData.map((modules, i) => {
                  return (
                    <div className='p-2' key={i}>
                    <div className='m-auto' style={{display:'flex', flexDirection:'row'}}>
                    <h3>{modules.name}</h3>
                    <div style={{ cursor:'pointer', marginLeft:'auto'}} id={'toggler' + i}>click</div>
                    </div>
                   
                    <UncontrolledCollapse toggler={"#toggler" + i}>
                    {modules.lessons.length && modules.lessons.map((lesson, index) => {
                      return (
                        <>
                        <div className='m-auto p-3'  style={index === i ? { display:'flex', flexDirection:'row', backgroundColor:'#E5F9FF'} :{display:'flex', flexDirection:'row'}}>
                        <Badge style={{width:40, height:40, borderRadius:'50%', display:'inline-block'}}><p className='mt-2'>{index + 1}</p></Badge>
                          <h4  style={{cursor:'pointer', marginLeft:50}} onClick={() => lessonClicked(lesson.resource_url)}>{lesson.title}</h4>
                          <input type={'checkbox'} style={{height:30, width:30, marginLeft:'auto'}} checked={completedLessons.includes(lesson._id)} />
                          {/* checked ={returnComplete().includes(lesson._id) ? true : false}  */}
                          </div>
                          <hr style={{width: '90%'}} />
                        </>
                      )
                    })} 
                    </UncontrolledCollapse>
                  </div>
                  )
                })}
                    {/* {getData.length == 0 ? null : getData[0].lessons.map((lesson, i) => {
                      const {title} = lesson;
                     
                      return (
                        <div className='p-2' key={i}>
                        <div className='m-auto p-3'  style={index === i ? { display:'flex', flexDirection:'row', backgroundColor:'#E5F9FF'} :{display:'flex', flexDirection:'row'}}>
                        <Badge style={{width:40, height:40, borderRadius:'50%', display:'inline-block'}}><p className='mt-2'>{i+ 1}</p></Badge>
                          <h4  style={{cursor:'pointer', marginLeft:50}} onClick={() => lessonClicked(i)}>{title}</h4>
                          <input type={'checkbox'} style={{height:30, width:30, marginLeft:'auto'}} checked ={ returnComplete().includes(lesson._id) ? true : false} onChange={() => updateLessonStatus(lesson._id)} />
                          </div>
                          <hr style={{width: '90%'}} />
                        </div>
                      )
                    })} */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsideCourse