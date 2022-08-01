import React, {useEffect, useState} from 'react'
import useGet from './../customHooks/useGet';
import {Badge,  UncontrolledCollapse} from 'reactstrap'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const MainInsideCourse = () => {
     const { courseId, enrollmentId } = useParams();
    const {getData, fetchGetData} = useGet(`/api/courses/modules/${courseId}`);
    const [updateChange, setUpdateChange] = useState(false)
    const [lessonNumber, setLessonNumber] = useState(null)
    const [index, setIndex] = useState(0)
    const [allLessons, setAllLessons] = useState([])
    const [completedLessons, setCompletedLessons] = useState(null)
    const [markedComplete, setMarkedComplete] = useState([])
    // const [lessonChange, setLessonChange] = useState(false);

    useEffect(() => {
        fetchGetData()
      }, [index]);


      useEffect(() => {
        axios.get('http://localhost:4000/api/enrollment/62d939df6ef0ea8eb2934c3b').then((enrollment) => {
          console.log('enrollment', enrollment)
            // console.log(enrollment.data.lessonStatus)
          const filteredPreCompleted =  enrollment.data.completedLessons.filter((data) => data.lesson)
          const markComplete = enrollment.data.completedLessons.filter((data) => data.complete)
          console.log(markComplete)
          setMarkedComplete(markComplete)
        // const filteredCompleted = enrollment.data.completedLessons;
        if(getData.length){
          console.log('lessons', getData.lessons)
          setAllLessons(getData.lessons)
        }
           console.log('Completed ', filteredPreCompleted)
            setCompletedLessons(filteredPreCompleted)
            // console.log(enrollment.data.lessonStatus, 'all lessons')
        }).catch((err) => {
          console.log(err)
        })
      }, [updateChange])

      //getting the lesson index 

      const lessonClicked = (url, i) => {
         setIndex(i)
        //  setLessonChange(true);
        setLessonNumber(url)
      }
      
      //returning completed lessons
      const returnComplete = () => {
          if(markedComplete){
            console.log(markedComplete)
            return markedComplete.map((completed) => completed.lesson)
       
          } else{
            return allLessons
          }
        }
    
        //updating the lesson
       async function updateLessonStatus (moduleId, lessonId){
        console.log('clicked')
        setUpdateChange(true)
        // console.log(completedLessons)
            const completedFilter = completedLessons.filter((complete) => complete.lesson == lessonId)
            // console.log(id , 'ID')
            // console.log(completedFilter)
            // const allLessonFilter = allLessons.filter((lessons) => lessons.lesson == id)
            if(completedFilter.length){
              
              const completed = completedFilter[0].complete ? false : true
              console.log(completed)
             const updateData = {completedLessonId:completedFilter[0]._id, complete: completed }
              const updateLesson = await axios.put('http://localhost:4000/api/enrollment/update/complete/62d939df6ef0ea8eb2934c3b/' + moduleId + '/' + lessonId, updateData)
           console.log(updateLesson)
           setUpdateChange(false)
            }else{
            const pushLesson = await axios.put('http://localhost:4000/api/enrollment/complete/62d939df6ef0ea8eb2934c3b/' + moduleId + '/' + lessonId)
            console.log(pushLesson)
            setUpdateChange(false)
          }
        }

   return (
    <div className='container'>
 <div className='row' style={{marginTop:50, marginBottom:50}}>
            <div className='col-md-8'>
           {getData[0] && <iframe
        src={lessonNumber || getData[0].lessons[0].resource_url}
        frameBorder="0"
        // height='500px'
        // width='800px'
        style={{height:'100%', width:'100%', margin:'auto'}}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />}
        {/* src={ setLessonNumber > 0 ? getData[0].lessons[lessonNumber].resource_url : getData[0].lessons[0].resource_url} */}
            </div>
            <div className='col-md-4'>
                <div className='card' style={{height:500,overflowY:'scroll', padding:10}}>
                {getData.length && getData.map((modules, i) => {
                  return (
                    <div className='p-2' key={i}>
                    <div className='m-auto' style={{display:'flex', flexDirection:'row'}}>
                    <p style={{fontSize:20}}>{modules.name}</p>
                    <img src='https://cdn-icons.flaticon.com/png/128/2985/premium/2985150.png?token=exp=1658061800~hmac=bc1465cd91d84ed5dece97dfce3426b7'
                     style={{ cursor:'pointer', marginLeft:'auto', height:40, padding:10}} id={'toggler' + i}></img>
                    </div>
                   
                    <UncontrolledCollapse toggler={"#toggler" + i}>
                    {modules.lessons.length && modules.lessons.map((lesson, ind) => {
                      return (
                        <>
                        <div key={ind} className='m-auto p-3'  style={index == ind ? { display:'flex', flexDirection:'row', backgroundColor:'#E5F9FF'} :{display:'flex', flexDirection:'row'}}>
                        <Badge style={{width:35, height:35, borderRadius:'50%', display:'inline-block'}}><p className='mt-2'>{ind + 1}</p></Badge>
                          <h4  style={{cursor:'pointer', marginLeft:20, fontSize:16}} onClick={() => lessonClicked(lesson.resource_url, ind)} >{lesson.title}</h4>
   
                          <input type={'checkbox'} style={{height:20, width:30, marginLeft:'auto'}} onClick={() => updateLessonStatus(modules._id, lesson._id)}  defaultChecked={returnComplete() && returnComplete().includes(lesson._id) ? true : false} />
                          {/* checked ={returnComplete().includes(lesson._id) ? true : false}  */}
                         
                          </div>
                          <hr style={{width: '90%'}} />
                        </>
                      )
                    })} 
                    </UncontrolledCollapse>
                    <hr style={{width: '100%'}} />
                  </div>
                 
                  )
                })}
                </div>
            </div>
        </div>
        </div>
   )
}

export default MainInsideCourse;