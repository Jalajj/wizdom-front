import axios from 'axios';
import React, {useState} from 'react';
import BasicModal from "../../components/BasicModal/BasicModal";
import { useGlobalContext } from '../../context';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavyElements';
import { googleLogout } from '@react-oauth/google';

const Navy = () => {
  const [showModal, setShowModal] = useState(false)
  const {localData} = useGlobalContext();

  const toggleModal = () => {
    setShowModal(!showModal);
  }
 
  const logout = () => {
    
      axios.get('http://localhost:4000/auth/signout').then((resp) => {
        if(localData.photo){
          googleLogout()
        }
        console.log(resp)
        localStorage.removeItem('auth')
        window.location.href = window.location.href;
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Nav>
        <NavLink to='/'>
        <h4 style={{marginRight:'auto', marginLeft:20, marginTop:10}}>WIZDOMQA.</h4>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/courses' activeStyle>
           Courses
          </NavLink>
          <NavLink to='/user/courses' activeStyle>
           My courses
          </NavLink>
          <NavLink to='/modules' activeStyle>
            Modules
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
       <NavBtn onClick={ localData ? () => logout() : () => setShowModal(true)}>
           <NavBtnLink>{localData ? 'Logout' : 'Get Access'}</NavBtnLink>
        </NavBtn>
      </Nav>
      <BasicModal open={showModal} toggle={toggleModal} />
    </>
  );
};

export default Navy;