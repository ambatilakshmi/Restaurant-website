import axios from 'axios'
import React, { useState } from 'react'

const Book = () => {
  const [uname,setuname]=useState('');
  const[email,setemail]=useState('');
  const[date,setdate]=useState('');
  const[request,setrequest]=useState('');
  //const[people,setpeople]=useState('');

  const booknow = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      // Use await to handle the axios post correctly
      const result = await axios.post("http://localhost:3008/book", {
        uname,
        email,
        date,
        request
      }, {
        headers: {
          'Content-Type': 'application/json' // Specify JSON content type
        }
      });

      if (result.status === 201) {
        console.log("Table booked successfully");
        alert("table booked successfully");
      } else {
        alert("Can't book the table. Try again");
      }
    } catch (error) {
      console.error("Error booking the table:", error); // Log error for debugging
      alert("Network error: Unable to book the table. Please try again.");
    }
  };

  

  return (
    <div className='bg-dark'>
       
    
        <div className='d-flex'>
          
        <div className='col-3 mx-auto'>
            <h4 style={{fontFamily:"Blackadder ITC",color:"#FEA116"}}>Reservation---------------</h4>
        <b><h2 className='text-light'>Book a table online</h2></b>
        <input onChange={(e)=>setuname(e.target.value)}  className='form-control mt-5' name='uname' placeholder='Your Name'></input>
        <input onChange={(e)=>setemail(e.target.value)} className='form-control mt-2'  name='email' placeholder='Your Email'></input>
        <input onChange={(e)=>setdate(e.target.value)} className='form-control mt-2' name='date' placeholder='Date & Time'></input>
      
       {/* <select onChange={(e)=>setpeople(e.target.value)} className='form-control mt-2'  name='people'><option>People 1</option>
        <option>People 2</option>
        <option>People 3</option>
        </select> */}
        <input onChange={(e)=>setrequest(e.target.value)} className='form-control mt-2'  name='request' placeholder='Special Request'></input>
        <button onClick={booknow} className='w-100 btn btn-warning mt-2'>Book Now</button></div>
        <div><img  className="mt-0 j"src={"https://themewagon.github.io/restoran/img/video.jpg"}></img> 
      </div></div>
</div>
   
  )
}

export default Book