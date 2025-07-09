import React, { useState } from 'react'
import styled from 'styled-components'
import '../custom.css'
import { Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const LoginPage = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(https://th.bing.com/th/id/R.716dd6c6dfe9dc348a3c3f7a94ee3071?rik=Y2SscT6%2bl%2bTQuQ&riu=http%3a%2f%2fwww.kranchevphotography.com%2fwp-content%2fuploads%2f2010%2f01%2f027-Nature-Photography-Sunrise-Sunset-Photo-Big1800.jpg&ehk=u%2bGv19LHZnSAmaAw8zHoUqL1nTj%2bxZZelg8nRLHEMPg%3d&risl=&pid=ImgRaw&r=0)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '90vh',

  };
  const navigate=useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  // Example: Redirect to login if not authenticated
useEffect(() => {
  const user = sessionStorage.getItem('user');
  if (!user) {
    navigate('/login');
  }
}, [navigate]);
  const handlelogin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3008/login",{email,password})
    
    .then(result=>{
      console.log("Login response:", result.data);
      if(result.data.status==="success")
      {
        console.log("User ID:", result.data.userId);
        sessionStorage.setItem('userId',result.data.userId);
      navigate('/')
      } 
      else{
        console.log("Login response:", result.data);
        alert("login failed!")
      
      }
    })
    .catch(err=>{
      console.log(err)
      
    alert("an error occured!")})
  }


  return (
    <Btn>
      <div className="login" style={backgroundImageStyle}>
        <div className="col-3 mx-auto ">
          <form method="get" action="http://localhost:8080/" className='uname border p-5'>
           <Avatar className='mx-auto w-25' style={{ height: '50px' }}></Avatar>
            <input 
            onChange={(e)=>setEmail(e.target.value)}
            name="email" type='email' className='form-control mt-4' placeholder="Email">
            </input>
            
            <input
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password" type='password' className='form-control mt-3' placeholder="Password"></input>
            
            <button onClick={handlelogin} type="submit" className='w-100 mt-3 mb-5 border-0 rounded' style={{ height: '35px' }}>Login</button>
           
            <p className='text-light'> New customer?<Link style={{ textDecoration: 'none', color: 'white' }} to="/sign"><button>SignUp</button></Link></p>
          </form>
        </div>
      </div>

    </Btn>


  )
}

export default LoginPage
const Btn = styled.div`
.rounded:hover{
background-color:blue;
}`