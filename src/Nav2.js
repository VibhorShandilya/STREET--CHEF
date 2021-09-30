import { Link } from "react-router-dom";
import "./Nav2.css"
const Nav = () => {
    return (  
 
<div class = "Nain">
<nav role="navigation">
  <div id="menuToggle">
   
    <input type="checkbox" />
    <div class = "space">
    <span></span>
    <span></span>
    <span></span>
    </div>
   
    <ul id="menu">
<Link to="/"><li>HOME</li></Link>
<Link to="/bar"  ><li>BAR</li></Link>
<Link to="/account"  ><li>ACCOUNT</li></Link>
<Link to="/supports"  ><li>SUPPORT</li></Link>
<Link to="/feedback"  ><li>FEEDBACK</li></Link>
<Link to="/logout"  ><li>LOGOUT</li></Link>
</ul>
  </div>
</nav>
</div>



    );
}
 
export default Nav;
