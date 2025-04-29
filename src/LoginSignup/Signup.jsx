import React, { useState } from 'react'
import image from "../assets/main.jpg"
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
      function togglePasswordVisibility() {
            var password = document.getElementById('password');
            if (password.type === 'password') {
                  password.type = 'text';
            } else {
                  password.type = 'password';
            }
          }
      const userDetail = {
            name: '',
            email: '',
            password: ''
           }
      const [data, setData] = useState(userDetail);
      const navigate = useNavigate();
      const handleInput = (e)=>{
       const name = e.target.name;
       const value = e.target.value;
       setData({...data, [name]:value})
      }
 
      const handleSubmit = (e)=>{
         e.preventDefault();
         if(data.name == '' || data.email == '' || data.password == ''){
            alert('Please Enter All Input Fields')
         }else{
            const getData = JSON.parse(localStorage.getItem('user') || '[]');
            let arr = [];
            arr = [...getData];
            arr.push(data);
            localStorage.setItem('user', JSON.stringify(arr));
            alert('SignUp Successfully')
            navigate('/login');
         }

      }

  return (
    <div>
      <Navbar></Navbar>
        <div className='main-page'>
            <form onSubmit={handleSubmit}>
                  <div className='heading'>
                        <p>Sign Up</p>
                  </div>
                  <div className="account">
                        <input type="text" name='name' placeholder='Enter Your Name' onChange={handleInput}/>

                        <input type="email" name='email' placeholder='Enter Your Email' onChange={handleInput}/>

                        <input id='password' type="password" name='password' placeholder='Enter Your Password' onChange={handleInput}/>
                       
                       <input type="checkbox" htmlFor="password" id='show-password' onClick={togglePasswordVisibility}/>

                         <p>Already have an account ? <a href="/login">Login</a></p>
                  </div>
                  <button>Sign Up</button>
            </form>
            <div>
                  <img src={image} alt="Login Image" />
            </div>
        </div>
    </div>
  )
}

export default Signup