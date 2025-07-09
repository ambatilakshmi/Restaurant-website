
import './custom.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import home from './images/home.png';
import { AppBar, Toolbar, Typography,Button } from '@mui/material';
import cart from './images/carts.png';
import { useNavigate } from 'react-router-dom';
function Header() {
   const navigate=useNavigate();
   const handleLogout = () => {
      sessionStorage.removeItem('user'); // Remove user data from localStorage
      navigate('/login'); // Redirect to login page
    };
    
   return (
      <div className='head'>
         <AppBar sx={{ backgroundColor: 'BLACK',marginBottom:'1px' }}>
            <Toolbar>
               <Typography>
                  <div className="navbar text-light">
                  <Link to='/'>  <div className='d-flex me-5'> <img className="restlogo" src={"https://img.freepik.com/premium-vector/retro-vintage-style-ornament-design-logo-retro-restaurant-typography-emblem-vector-line-simple-elegant-fork-spoon-knife_638875-8647.jpg"}></img>
                       <h1 style={{ color: "#fea116" }}>Restoran</h1></div></Link>
                     <Link to="/"><h6>Home</h6></Link>
                     <Link to="/about"><h6>About</h6></Link>
                     <Link to="/menulist"><h6 >Menu</h6></Link>
                     <Link to="/service"> <h6>Service</h6> </Link>
                     <Link to="/contact">  <h6>Contact</h6> </Link>
                     <Link to='/login'><h6>Login</h6></Link>
                     <Link to='/sign'><h6>Signup</h6> </Link>
                    
                     <Link to="/Viewcart"><h6>Cart</h6></Link>
                      <div>
                      <Button style={{textDecoration:'none',color:'white'}} onClick={handleLogout}>Logout</Button>
                     <Link to="/book"> <Button style={{ backgroundColor: 'orange', borderRadius: '0.5rem',marginLeft: '20px' ,textDecoration:'none'}}>Book A Table</Button></Link>

                 {/* <Link to="/cart"><img style={{height:'60px',width:'50px',paddingLeft:'10px'}} src={cart}></img></Link>  */}
                     </div>
                     
                  </div>
                 

               </Typography>
            </Toolbar>
         </AppBar>

      </div>

   )
}
export default Header;
const Wrapper = styled.div`






`;

