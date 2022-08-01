import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
// import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import logo from '../../img/logo.png';
import './tempNav.css'
import BasicModal from "../../components/BasicModal/BasicModal";

const Navbarmenu = () => {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
      setShowModal(!showModal);
    }

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink style={{textDecoration:'none'}} exact activeClassName='is-active' to="/">
                <div>
                    <p className={'wizdomqa'}>WIZDOMQA.</p>
                 </div>
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >
                        <img height='20px' src={'https://cdn-icons-png.flaticon.com/512/1828/1828615.png'} alt="logo" /> 
                          </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >
                        <img height='20px' src={'https://cdn-icons-png.flaticon.com/128/169/169104.png'} alt="logo" /> 
                        </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Courses </NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Blog</Link>
                    {/* <FiChevronDown /> */}
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}>Profile</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}>More Classes</NavLink> </li>
                        </ul>
                    </li>
                    <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
                    <li className={'button2 menu-item mt-3'} style={{cursor:'pointer', marginLeft:20}}>
          <p className={'getAcess'} onClick={ () => setShowModal(true)}>Get Access</p>
        </li>
                    </ul>


                    </nav>     
                </div>   

                <BasicModal open={showModal} toggle={toggleModal} />

        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu