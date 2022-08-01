import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useGlobalContext } from '../../context'
import './tempprofile.css'

function TempProfile() {
  const {localData} = useGlobalContext();
  const [user, setUser] = useState({})

  useEffect(() => {
    if(localData){
      axios.get('http://localhost:4000/api/users/' + localData.user._id).then((user) => {
        setUser(user.data)
        console.log(user)
      }).catch((err) => {
        console.log(err)
      })
    }
    return;
  }, [])

  return (
    <div classNameName='profile-page p-5'>
    {/* <img className="page-header header-filter" src={'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}></img> */}
    <div className="main main-raised" style={{marginTop:100, paddingBottom:100}}>
		<div className="profile-content">
            <div className="container">
	                <div className="m-auto">
        	           <div className="profile m-auto">
	                        <div className="avatar" style={{marginTop:-50}}>
	                            <img
                                 src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1" 
                                alt="Circle Image" className="img-raised rounded-circle img-fluid" />
	                        </div>
	                        <div className="name">
	                            <h3 className="title">{user.username || 'User'}</h3>
								<h6>Designer</h6>
	                        </div>
	                    </div>
    	            </div>
                    
                    <div className='form-profile'>
                    <div className='row m-auto mt-4'>
                    <div className="form-group mt-4 col-sm" >
      <label className='mb-2 '>Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Your email" defaultValue={user.email || null}
      name="email" style={{padding:20, borderRadius:10}} /> 
      </div>
      <div className="form-group mt-4 col-sm" >
      <label className='mb-2'>Username:</label>
      <input className="form-control" placeholder="Your username" style={{padding:20, borderRadius:10}}  defaultValue={user.username || null} /> 
      </div>
                    </div>
       
      <div className='row m-auto mt-4'>
      <div className="form-group col-sm" >
      <label for="education" className='mb-2'>Education: </label>
      <input type="text"  defaultValue={user.email || null} className="form-control" style={{padding:20, borderRadius:10}} placeholder="Your education" name="education" /> 
      </div>
      <div className="form-group col-sm" >
      <label for="number" className='mb-2'>Number :</label>
      <input type="number" className="form-control" style={{padding:20, borderRadius:10}} id="email" placeholder="Your Number" name="number" /> 
      </div>
     
      </div>
      <div className="form-group m-auto mt-4" style={{width:'98%'}}>
      <label for="text" className='mb-2'>Address:</label>
      <input type="text" className="form-control" style={{padding:20, borderRadius:10}} id="email" placeholder="Your address" name="address" /> 
      </div>
      <div className="form-group mt-4" style={{width:'98%', marginLeft:'1%'}}>
            <label>About</label>
            <textarea className="form-control" rows="5" placeholder="My Bio" style={{padding:20, borderRadius:10, height:100}}></textarea>
        </div>
   </div>
            </div>
        </div>
	</div>  


    </div>
  )
}

export default TempProfile