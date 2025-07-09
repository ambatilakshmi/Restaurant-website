import { Nav } from "react-bootstrap";

function Navbar() {
    const links = ["Home", "About", "Services", "Contact"];
    return (
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
      </nav>
    );
  }
  export default Navbar;