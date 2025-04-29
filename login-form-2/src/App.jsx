import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './LoginSignup/Signup';
import Login from './LoginSignup/Login';
import Home  from './LoginSignup/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Routes>

     <Route path='/' element={<Signup />} />
     <Route path='/login' element={<Login />} />
     <Route path='/home' element={<Home />} />

   </Routes>
   </BrowserRouter>
        
    </>
  )
}

export default App
