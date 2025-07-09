import React, { useState } from 'react'
import styled from 'styled-components'
import back from '../images/back.jpg';
import '../custom.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Button, Carousel, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios';
import right from '../images/right.png'
import { Avatar, TextField } from '@mui/material';



const Contact = () => {
  const[query,setQuery]=useState('');
  const[email,setEmail]=useState('');
  
  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const result = await axios.post("http://localhost:3008/contact", {
        email,
        query
      });
      if (result) {
        console.log('Query sent successfully. We will contact you soon!');
        alert("Query sent!");
      }
    } 
    catch (error) {
      console.error('Error sending query:', error);
      alert("Failed to send query. Please try again later.");
    }
  };




  return (
    <div>
    <div className='top d-flex'>
      <div className='container left'>
        <h1 style={{color:'white',padding:'20px'}}>
          CONTACT US
        </h1>
        <div className='d-flex'>
        <CallIcon style={{fontSize:40 ,color:'white'}}></CallIcon>
        <h2>+91 9160821613</h2>

        </div>
        


        <div className='d-flex padding:10px'>
        <EmailIcon style={{fontSize:40,color:'white'}}></EmailIcon>
        <h2>support@gmail.com</h2>
        </div>
        <div className='d-flex'>
          <InstagramIcon style={{fontSize:40,color:'white'}}></InstagramIcon>
          <h2>restoran.__</h2>

        </div>
        <div className='d-flex'>
          <PinDropIcon style={{fontSize:40,color:'white'}}></PinDropIcon>
          <h2>Gangavaram,Nellore,Andhra pradesh.</h2>

        </div>
 
     
<div style={{alignItems:'center'}}>

        <TextField onChange={(e)=>setEmail(e.target.value)} style={{backgroundColor:'white',border:'30',marginRight:'320px',marginBottom:'10px',marginTop:'20px'}} placeholder='your Email' name='email'></TextField>
        <TextField onChange={(e)=>setQuery(e.target.value)}style={{backgroundColor:'white',border:'20',marginRight:'520px'}}placeholder='Enter your Query' name='query'> </TextField>
        <Button onClick={handlesubmit}>Submit</Button>
       
        </div>
 

      </div>


      <div className='right'>
        <img style={{height:'100vh'}} src={back}></img>
      </div>


    </div>




      




    </div>

  )

}

export default Contact
const Wrapper = styled.div`
.right{
width:100vh;

}
.top{
display:flex;

}



.pic{
display:flex;
}
.total{
font-weight:100%;
font-size:20px;
background-color:#1c1c1c;

}


.para{
z-index:999;
width:100px;
margin:0px;
padding-left:100px;


color:white;
h2{
color:yellow;

display:grid;
}
p{
margin:0px
}
}
.back
{
height:100%;
width:100%;
}
.pic{

text-align:center;
justify-content:center;
}
.d{
display:flex;
padding-right:10px;
padding-bottom:10px;
p{
margin-left:20px;
}
}
.d1{
padding-top:70px;
display:flex;
padding-bottom:30px;
h2{
padding-left:30px;
}

}
.d2{
padding:10px;
margin-bottom:10px;

}
.b{
width:10px;
height:50px;

}





`;

