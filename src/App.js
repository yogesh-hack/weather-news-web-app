import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
  const [username,setusername]  =useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setusername(user.displayName)
      }else{
        setusername("")
      }
    })
  },[])
  return(
  // routes
  <>
    <Router>
        <Routes>
          <Route path='/' element={<Home name = {username} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
    </Router>
  </>
  )
}

export default App;
