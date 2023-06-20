import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material';
import grad from './images/grad.jpg'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


function Sidebar() {
  const user=useSelector(selectUser)
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={grad} />
       <Avatar src={user.photoUrl} className='sodebar__avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>[{user.email}]</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>

        </div>


      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("software engineering")}
      </div>
    </div>
  )
}

export default Sidebar
