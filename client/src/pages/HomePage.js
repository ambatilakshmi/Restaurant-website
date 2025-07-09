import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../custom.css'
import { Carousel } from 'react-bootstrap'
import { Link } from "react-router-dom";

import { Avatar } from '@mui/material';




const HomePage = () => {
  return (
    <div>
      <div className='main-content'>
        <div class="container text-light d-flex">
          <div className='content'> <h1>Enjoy Our<br></br> Delicious Meal</h1>
            <p>"Welcome to Our Restaurant, where flavor meets comfort. Indulge in our freshly crafted dishes, made with love and the finest ingredients!"</p>
           
           <Link to="/book" ><a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a></Link></div>

          <div><img class="spin" src={"https://themewagon.github.io/restoran/img/hero.png"}></img></div>
        </div>

        <div className='mem'>
          <div className='container mt-3'>
            <h6 style={{ color: "#fea116" }}><hr></hr><i>Team members</i> <h1 style={{ color: "white" }}>Our Master Chefs</h1><hr></hr></h6>


            <div className=' d-flex'>
              <div class="card ms-2">
                <Avatar className='mx-auto w-50 h-50 mt-3'></Avatar>
                <div class="card-body mb-3">
                  <h5 class="card-title">Full Name</h5>
                  <p class="card-text">designation</p>
                  <FacebookIcon ></FacebookIcon >
                  <InstagramIcon></InstagramIcon>
                  <TwitterIcon ></TwitterIcon >
                </div>
              </div>
              <div class="card ms-2">
                <Avatar className='mx-auto w-50 h-50 mt-3'></Avatar>
                <div class="card-body mb-3">
                  <h5 class="card-title">Full Name</h5>
                  <p class="card-text">designation</p>
                  <FacebookIcon ></FacebookIcon >
                  <InstagramIcon></InstagramIcon>
                  <TwitterIcon ></TwitterIcon >

                </div>
              </div>
              <div class="card ms-2">
                <Avatar className='mx-auto w-50 h-50 mt-3'></Avatar>
                <div class="card-body mb-3">
                  <h5 class="card-title">Full Name</h5>
                  <p class="card-text">designation</p>
                  <FacebookIcon ></FacebookIcon >
                  <InstagramIcon></InstagramIcon>
                  <TwitterIcon ></TwitterIcon >

                </div>
              </div>
              <div class="card ms-2">
                <Avatar className='mx-auto w-50 h-50 mt-3'></Avatar>
                <div class="card-body mb-3">
                  <h5 class="card-title">Full Name</h5>
                  <p class="card-text">designation</p>
                  <FacebookIcon ></FacebookIcon >
                  <InstagramIcon></InstagramIcon>
                  <TwitterIcon ></TwitterIcon >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default HomePage;