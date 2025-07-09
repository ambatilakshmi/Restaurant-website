import logo from './logo.svg';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './pages/Service'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Itemdetail from './pages/Itemdetail';
import Menulist2 from './pages/Menulist2';
import Cart from './pages/Cart';
import Navbar from './Navbar';
import Menulist3 from './pages/Menulist3';
import Viewcart from './pages/Viewcart';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/menulist" element={<Menulist2/>}></Route>
          <Route path="/itemdetail/:number" element={<Itemdetail />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sign" element={<Signup />}></Route>
          <Route path="/Menulist2" element={<Menulist2></Menulist2>}></Route>
          <Route path="/Menulist3" element={<Menulist3></Menulist3>}></Route>
      <Route path="/viewcart" element={<Viewcart></Viewcart>}></Route>

        </Routes></BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
