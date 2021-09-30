import { Link } from "react-router-dom";
const Navbar = () => {
    return (
    
<div>
  <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      StreetChief
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  
  <Link >STREETCHIEF</Link>
    <Link to="/" >HOMEllll</Link>
    <Link to="/bar"  >BAR</Link>
    <Link to="/support"  >SUPPORT</Link>
    <Link to="/cart"  >CART</Link>
    <Link to="/account">ACCOUNT</Link>
    <Link to="/feedback"  >FEEDBACK</Link>
    <Link to="/logout"  >LOGOUT</Link>
</div>

</div>
</div>





    )
};






 




export default Navbar;