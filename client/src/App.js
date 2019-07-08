import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header.js";
import Home from "./Pages/Home/Home.js";
import Cities from "./Pages/Cities/Cities.js";
import Itineraries from "./Pages/Itineraries/Itineraries.js";
import BecameAMember from "./Pages/Member/Create/Create.js";
import Login from "./Pages/Member/Login/Login.js";
import Error from "./Pages/Error/Error.js";
import Footer from "./Components/Footer/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="page-wrap">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Cities" component={Cities} />
              <Route path="/Itineraries" component={Itineraries} />
              <Route path="/Itineraries/:name" component={Itineraries} />
              <Route path="/BecomeAMember" component={BecameAMember} />
              <Route path="/Login" component={Login} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        {/* 
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p> */}

        <Footer />
      </div>
    );
  }
}

export default App;
