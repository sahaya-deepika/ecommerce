import './heeader.css';
import logo from '../../assets/logo.webp';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
function Header() {

    const handlesearch = () => { 
        console.log("search clicked");
    }

    const handleprofile = () => {
        console.log("profile clicked");
    }

    const handlecart = () => {
        console.log("cart clicked");
    }   
    return (
        
  <header className="header">

<div className="top-header">

    <span className="gift">🎁</span>

    <div className="offer-text">
        Get exclusive Deals Only on WhatsApp
        <br />
        Channel - Join Now
    </div>

</div>
<div className="main-header">


  <div className="logo-container">
            
            <img src={logo} alt="logo" className="logo" />
</div>


<nav className="nav">

            <a href="#">Home</a>          
              <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
</nav>
<div className="icons">

    <FaSearch onClick={handlesearch} />
    <FaUser onClick={handleprofile} />
    <FaShoppingCart onClick={handlecart} />

</div>

</div>
            
</header>
    );
}
export default Header;