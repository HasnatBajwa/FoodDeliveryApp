import LandingPage from './Modules/LandingPage/LandingPage';
import About from './Modules/AboutUs/About';
import Restaurants from './Modules/Restaurants/Restaurants';
import Login from './Modules/Login/Login';
import Signup from './Modules/SignUp/Signup';
import Contactus from './Modules/ContactUs/Contactus';
import Dishes from './Modules/Dishes/Dishes';
import Deals from './Modules/Deals/Deals';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
	return (
		<div>
			<Router>
     
      <Switch>
        <Route exact path="/">
          <LandingPage/>
          </Route>
          <Route path="/Login">
           <Login/>
          </Route>
          <Route path="/Signup">
           <Signup/>
          </Route>
          <Route path="/About">
           <About/>
          </Route>
          <Route path="/Restaurants">
          <Restaurants/>
          </Route>
          <Route path="ContactUs">
            <Contactus/>
          </Route>
          <Route to="/Deals">
            <Deals/>
          </Route>
          <Route to="/Dishes">
            <Dishes/>
          </Route>
        </Switch>
    
    </Router>
    </div>
	);
}

export default App;
