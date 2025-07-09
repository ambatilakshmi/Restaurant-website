import { useEffect, useState } from "react"; 
import axios from "axios"; import { Link } from "react-router-dom"; 
import { Button, Carousel } from "react-bootstrap"; 
import swiggy1 from "../images/swiggy1.jpeg";
import swiggy2 from "../images/swiggy2.jpeg"; 
import swiggy3 from "../images/swiggy3.jpeg"; 
import swiggy4 from "../images/swiggy4.jpg";
import '../menu.css'; 

const Menulist3 = () => {
    const [menulist, Setmenulist] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

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

    return (
        <div className="menu-container">
            
            <div className="caro">
                <Carousel>
                    <Carousel.Item style={{ backgroundColor: '#ebdef0' }}>
                        <img src={swiggy1} />
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#ebdef0' }}>
                        <img src={swiggy2} />
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#ebdef0' }}>
                        <img src={swiggy3} />
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#ebdef0' }}>
                        <img src={swiggy4} />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="index">
                <h2 className="head-1">MENULIST</h2>
                <img className="search-1" src="https://cdn-icons-png.flaticon.com/512/17676/17676981.png"></img>
                <input
                    className="search-2"
                    placeholder="search for items"
                    value={searchQuery}
                    onChange={handleSearch}
                ></input>
                <div className="container d-flex flex-wrap">
                    {searchResults.length > 0 ? (
                        searchResults.map((item) => (
                            <div className="col-3 p-3" key={item.itemid}>
                                <div>
                                    <Link to={`/Itemdetail/${item.itemid}`}>
                                        <img className="image-1 rounded-5" src={item.image} alt={item.name}></img>
                                    </Link>
                                    <h5 className="xyz">{item.discount}</h5>
                                </div>
                                <div>
                                    <h3 className="item-class">{item.name}</h3>
                                    <div className="d-flex">
                                        <img className="rating" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwNw5QeWygpfv1XKwOm2ASy8ZtIrKa9aDGmwLKpN07iD0zkS04ICzLKN8iJQYruCehmw&usqp=CAU" alt="Rating" />
                                        <div>
                                            <p className="item-rating">{item.rating + "."}</p>
                                        </div>
                                        <div><p>{item.time}</p></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No results found for "{searchQuery}"</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menulist3;