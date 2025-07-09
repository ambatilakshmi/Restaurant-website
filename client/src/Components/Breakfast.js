import rect from 'react';
import styled from 'styled-components';
const Component=styled.div`
img{
height:100px;
width:100px;
margin-left:5px;}
.burger{
h4{
padding-left:10px;
}
hr{
margin-left:10px;}
p{
font-style:italic !important;
margin-left:10px;
margin-top:2px;
}
.parent{
margin-top:30px;}

`;
const Breakfast=()=>{
return(
    <div>
<Component>
    <div className='parent d-flex'>
    <div className='child1'>
    <div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>
</div>

<div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>
</div>
<div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>
</div>
<div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>
</div>
</div>
<div className='child2'>
    <div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>
</div>

<div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>
</div>
<div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>    
</div>
<div className="burger d-flex">
    <div>
    <img src={"https://m.media-amazon.com/images/I/71DWNOARGAL._AC_UF350,350_QL80_.jpg"}></img>
</div>
<div>
    <h4>Chicken Burger</h4>
    <hr></hr>
    <p>Ipsum ipsum clita erat amet dolor justo diam</p>
</div>
</div>
</div>
</div>
</Component> 
</div>  
)
}
export default Breakfast