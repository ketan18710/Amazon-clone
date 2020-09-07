import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
function App() {
  return (
    <Router>
      < div className="app">
        
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          {/** default route: */}
          <Route path="/">
            <Header/>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
// react context api vs redux - redux is more stable especially for 
// production since it's much morre flexible and longer in use,component api
// is easier.We use component api to get around prop drilling ie. oopar wale component se
// kuch bahut neeche wale tak bhejna ho as prop bhejenge
export default App;
