import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [password, setpassword] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const navigate = useNavigate();

  const CreateAccount = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      
      const result = await axios.post('http://localhost:3008/sign', {
        email,
        fname,
        lname,
        password,
        phonenumber,
      });
      if (result.status === 201) {
        console.log(result)
        sessionStorage.setItem('user', JSON.stringify(result.data));
        console.log('User created successfully');
        navigate('/login');
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        window.alert('Email already exists. Please use a different email');
      } else {
        console.error('Error:', err);
      }
    }
  };

  const backgroundImageStyle = {
    backgroundImage:
      'url(https://th.bing.com/th/id/R.bdf95c96be32441a63bb49cbec89a4bd?rik=C7b2gigEOJ6Ghg&riu=http%3a%2f%2fwww.textures4photoshop.com%2ftex%2fthumbs%2fitalian-restaurant-menu-with-chalkboard-background-1449.jpg&ehk=IMG0z3c5wTY9z8N8pof9oLwogJpIC4SvYrOa9Tls7f0%3d&risl=&pid=ImgRaw&r=0)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '90vh',
  };

  return (
    <div>
      <div className="login" style={backgroundImageStyle}>
        <div className="col-3 mx-auto">
          <div className="uname shadow border p-5">
            <h3 className="text-light">Create Account</h3>
            <input 
              onChange={(event) => setfname(event.target.value)}
              name="fname"
              placeholder="First Name"
              type="text"
              className="form-control mt-3"
            />
            <input
              onChange={(event) => setlname(event.target.value)}
              name="lname"
              placeholder="Last Name"
              type="text"
              className="form-control mt-3"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              placeholder="Email"
              type="email"
              className="form-control mt-3"
            />
            <input
              onChange={(event) => setphonenumber(event.target.value)}
              name="phonenumber"
              placeholder="Mobile No"
              type="number"
              className="form-control mt-3"
            />
            <input
              onChange={(event) => setpassword(event.target.value)}
              name="password"
              placeholder="Password"
              type="password"
              className="form-control mt-3"
            />
            <button onClick={CreateAccount} className="btn btn-warning mt-3 w-100" type="submit">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
