import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import linked from './images/linked.png'
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from "./features/userSlice"
import { auth } from './firebase'


function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header '>

            <div className="header__left">
                <img src={linked} alt='' />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={PeopleAltIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} onClick={logoutOfApp} title="me" />

            </div>
        </div>
    )
}

export default Header
