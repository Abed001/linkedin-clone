import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login } from "./features/userSlice"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  //this use effect is handeling the refresh so the doesnt logout when he refresh
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //the user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,

        }))
      } else {
        //the user is logged out
        dispatch(logout())
      }
    })
  }, []);
  return (
    <div className="app">
      <Header />

      {!user ? (<Login />) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}

    </div>
  );
}

export default App;
