
import React, {useEffect, useState} from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import './courses.css'
import axios from 'axios';
import {useErrorHandler} from 'react-error-boundary'
import TempCourseCard from '../../components/CourseCard/TempCourseCard';

function Courses() {
  const handleError = useErrorHandler();
  const [filteredData, setFilteredData] = useState([]);
  // const [ searchWord, setSearch] = useState('')
  const [getData, setGetData] = useState([])
  const [wordEntered, setWordEntered] = useState("");
  const [filter, setFilter] = useState({
    price: '',
    category: ''
  })
    // const {getData} = useGet('/api/courses/filter')

    const fetchData = () => {
      axios.get(`http://localhost:4000/api/courses/filter?price=${filter.price}&category=${filter.category}`)
      .then((data) => {
        console.log(data)
             setGetData(data.data)
        }).catch((err) => {
          console.log(err)
          handleError(err)
        })
    }
     useEffect(() => {
         fetchData()
     }, [filter])

    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = getData.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
      //  }else{
      //     return value.name.toLowerCase().includes(searchWord.toLowerCase());
      //  }
      });
      if (searchWord === "") {
        setFilteredData([]);
        fetchData()
      } else {
        setGetData(newFilter)
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  return (
    <div className='container'>
    <div className='m-auto' style={{paddingTop:50, paddingBottom:50, paddingRight:100}}>
      <h1>Courses we provide </h1>
      <p>You have variety of courses to choose from in wisdom QA</p>
    </div>
    <div className='row' style={{marginBottom:100, display:'flex', alignItems:'center', justifyContent:'center'}}>
    <div className='col-md-3'>
      <div className='m-auto'>
      <select className="form-control" style={{borderRadius:'20px 0 0 20px'}} 
      onChange={(e) => {setFilter({...filter, category: e.target.value})}}>
      <option value=''>All</option>
  <option value="development">Development</option>
  <option value="testing">Testing</option>
      </select>
      </div>
    </div>
    <div className='col-md-6'>
    <div >
        <div className="input-box" >
          <input type="text" className="form-control" value={wordEntered}
          
          placeholder='Search for courses'
          onChange={handleFilter} />
          <i className="fa fa-search"></i>                    
        </div>
        {/* {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
                <div key={key} className='dataItem'>
                  <p>{ value.name} </p> 
                </div>
              
            );
          })
           }
         </div>
        )} */}
    </div>
    </div>
   <div className='col-md-3'>
   <div className='m-auto'>
      <select name='Price' className="form-control" style={{borderRadius:'0px 20px 20px 0px'}} onChange={(e) => {setFilter({...filter, price:e.target.value})}}>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
      </select>
      </div>
   </div>
    </div>
  
    <div className='row mt-5 mb-5'>
      {getData && getData.map((course) => {
        return (
          <div className='col-md-4'>
            {/* <CourseCard course={course} /> */}
           
            <TempCourseCard course={course}  />
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Courses