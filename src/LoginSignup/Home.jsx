import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    // localStorage.removeItem('user');
    navigate('/login')
  }

  return (
    <div> 
      <Navbar></Navbar>
      <div className='home'>
            <h2>Welcome to Home Page!</h2>
            <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Home