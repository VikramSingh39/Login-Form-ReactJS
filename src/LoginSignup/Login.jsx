import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    if('email' == name){
      setEmail(value)
    }
    if('password' == name){
      setPassword(value)
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(email == '' || password == ''){
      alert('Please enter all details')
    }else{
      let getDetails = JSON.parse(localStorage.getItem('user'));
    
      getDetails.map((curValue)=>{
        let storeEmail = curValue.email;
        let storePassword = curValue.password;
        if(storeEmail == email && storePassword == password){
          alert('Login Successfully');
          navigate('/home')
        }else{
         return setMsg('Invalid Email or Wrong Password')
        }
      })
    }
  }

  return (
    <div> 
      <Navbar></Navbar>
        <div>
          <p className='errMsg'>{msg}</p>
        <form onSubmit={handleSubmit} className='login-form'>
                  <div className='heading'>
                        <p>Login</p>
                  </div>
                  <div className="account">

                        <input type="email" name='email' placeholder='Enter Your Email' onChange={handleInput}/>

                        <input type="text" name='password' placeholder='Enter Your Password' onChange={handleInput}/>
                         
                         <p>Create Account ? <a href="/">Sign Up</a></p>
                  </div>
                  <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login