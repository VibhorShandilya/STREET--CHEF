import "./App.css";
import Nav from "./Nav2"
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Home from "./home";
import Bar from "./bar";
import Support from "./supports"
import Account from "./account";
import Cart from "./cart";
import Logout from "./logout";
import Feedback from "./feedback";
import Header from "./footer"
import T from "./t";
function App() {
    
    return ( 
        <Router>
           
 <div>
 <Header/>
 <Nav/>
 
     <div className = "Body">
         <Switch>
         <Route exact path = '/'>
             <Home/>
         </Route>
         <Route exact path = '/bar'>
             <Bar/>
         </Route>
         <Route exact path = '/t'>
             <T/>
         </Route>
         <Route exact path = '/cart'>
             <Cart/>
             </Route>
             <Route exact path = '/account'>
             <Account/>
         </Route>
         <Route exact path = '/supports'>
             <Support/>
         </Route>
        
         <Route exact path = '/logout'>
             <Logout/>
         </Route>
         <Route exact path = '/feedback'>
             <Feedback/>
         </Route>
         </Switch>
         
     </div>
 </div>
 </Router>
    )
  }
  
  export default App;
  