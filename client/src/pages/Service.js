import React from 'react'

import styled from 'styled-components';
const Title=styled.div`
img{
height:50px;
width:60px;
margin:10px;
}
p{
margin:1px;
}
.ab{
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
height:200px;
padding:20px;
margin:20px;

}
.ab:hover{
background-color:#fea116;
color:white;
}
.ab:hover img {
  filter: brightness(0) saturate(100%) invert(100%);
}
`;
const Heading = styled.div`
  .ourservices {
    color: #FEA116;
    margin-right:3px;
    font-family: 'Blackadder ITC';
    font-size:50px;
  }
  .hr1{
    width:50px;
    margin-right: 0px;
    margin-left:500px;
    margin-top:35px;
    border-top: 1px solid black;
  }
    .hr2{
    width:50px;
    margin-left:7px;
    margin-top:40px;
    border-top: 1px solid black;
  }
   
`;



const Service = () => {
  return (
    <div className='service'>
        <Heading>
        <div className="mx-auto d-flex">
        <hr className='hr1'></hr>
        <p className='ourservices'>Our Services</p>
        <hr className='hr2'></hr>
    </div>
    </Heading>
    <h1 style={{ textAlign: 'center' }}>Explore Our Services</h1>

    <div className="container d-flex flex-wrap mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
        <Title>
        <div className="ab  rounded rounded-1 m-3">
        
    <img src={"https://pic.onlinewebfonts.com/thumbnails/icons_604899.svg"}></img>
    <h6>Master Chefs</h6>
    <p>Diam elitr kasd sed at elitr sed</p>
    <p>ipsum justo dolor sed clita amet</p>
    <p>diam</p>
    </div></Title>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <Title>
        <div className="ab  rounded rounded-1 m-3">
        
    <img src={"https://cdn-icons-png.flaticon.com/512/7763/7763269.png"}></img>
    <h6>Quality Food</h6>
    <p>Diam elitr kasd sed at elitr sed</p>
    <p>ipsum justo dolor sed clita amet</p>
    <p>diam</p>
    </div></Title>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <Title>
        <div className="ab  rounded rounded-1 m-3">
        
    <img src={"https://cdn-icons-png.flaticon.com/512/5253/5253940.png"}></img>
    <h6>Online Order</h6>
    <p>Diam elitr kasd sed at elitr sed</p>
    <p>ipsum justo dolor sed clita amet</p>
    <p>diam</p>
    </div></Title>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <Title>
        <div className="ab  rounded rounded-1 m-3">
        
    <img src={"https://cdn-icons-png.flaticon.com/512/4238/4238922.png"}></img>
    <h6>24/7 Service</h6>
    <p>Diam elitr kasd sed at elitr sed</p>
    <p>ipsum justo dolor sed clita amet</p>
    <p>diam</p>
    </div>
    </Title>
    </div>
    </div>
    

</div>
    
  )
}

export default Service



