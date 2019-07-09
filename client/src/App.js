import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Nav from "./Components/Nav/Nav.js";
import Error from "./Pages/Error/Error.js";
import Blogs from "./Pages/Blogs/Blogs.js";
import Cities from "./Pages/Cities/Cities.js";
import Member from "./Pages/Member/Member/Member.js";
import Login from "./Pages/Member/Login/Login.js";
import Footer from "./Components/Footer/Footer.js";
import Itineraries from "./Pages/Itineraries/Itineraries.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="page-wrap">
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Cities" component={Cities} />
              <Route path="/Itineraries" component={Itineraries} />
              <Route path="/Itineraries/:cityName" component={Itineraries} />
              <Route path="/Blogs" component={Blogs} />
              <Route path="/Login" component={Login} />
              <Route path="/Member" component={Member} />
              <Route component={Error} />
            </Switch>
          </div>  
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
