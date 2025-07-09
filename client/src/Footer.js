import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
function Footer()
{
    return(
        <div className="ff d-flex">
            <div className="container d-flex">
            <div className="box  ">
<h4 className="ff-secondary"> Company <hr></hr></h4>
<p>About Us</p>
<p>Contact Us</p>
<p>Reservation</p>
<p>Privacy Policy</p>
<p>Terms & Condition</p>
            </div>
            <div className="box">
            <h4 className="ff-secondary"> Contact<hr></hr></h4>
<p><LocationOnOutlinedIcon></LocationOnOutlinedIcon>123 Street, New York, USA</p>
<p><CallOutlinedIcon ></CallOutlinedIcon >+012 345 67890</p>
<p><MailOutlinedIcon></MailOutlinedIcon>info@example.com</p>
<FacebookIcon ></FacebookIcon >
  <InstagramIcon></InstagramIcon>
  <TwitterIcon ></TwitterIcon >
</div>
<div className="box ">
<h4 className="ff-secondary"> Opening<hr></hr></h4>
<p>Monday-Saturday</p>
<p>9AM-9PM</p>
<p>Sonday</p>
<p>10AM-8PM</p>
</div>
<div className="box">
<h4 className="ff-secondary">newsletter<hr></hr></h4>
<p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
<div class="position-relative mx-auto" >
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"></input>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>


</div>

        </div>
        <hr></hr>
        
        </div>
    )
}
export default Footer;