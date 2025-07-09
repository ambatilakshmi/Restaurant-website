import { useEffect, useState } from "react"; 
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom"; 
import { Button, Carousel } from "react-bootstrap"; 
import swiggy1 from "../images/swiggy1.jpeg";
import swiggy2 from "../images/swiggy2.jpeg"; 
import swiggy5 from "../images/swiggy3.jpeg"; 
import swiggy3 from "../images/swiggy4.jpg";
import swiggy4 from "../images/book.jpg"
import "../menu.css"; 

const Menulist2 = () => {
    const [menulist, Setmenulist] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate(); 

    const Menulist = async () => {
        const response = await axios.get("http://localhost:3008/menulist");
        if (response && response.data.status === "success") {
            Setmenulist(response.data.data);
            setSearchResults(response.data.data);
        }
    }

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query) {
            const response = await axios.get(`http://localhost:3008/search?query=${query}`);
            if (response.data.status === "success") {
                setSearchResults(response.data.data);
            }
        } else {
            setSearchResults(menulist); 
        }
    };

    useEffect(() => {
        Menulist();
    }, []);

    const handleGetStarted = () => {
        
        navigate("/Menulist3");
    };

    return (
        <div className="menu-container">
            <img
                className="menu-1"
                src={swiggy5}
                alt="Menu"
            />
            <Button className="get-started-btn" onClick={handleGetStarted} >
                Order Now{"->"}
            </Button>
        </div>
    );
}
export default Menulist2;