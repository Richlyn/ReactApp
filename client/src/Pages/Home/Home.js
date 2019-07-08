import React, { Component } from "react";
import Blog from "../../Components/Blog/Blog.js"
import Divider from '@material-ui/core/Divider';
import Logo from "../../Assets/MYtineraryLogo.png";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={Logo} className="MYtinerary-logo" alt="logo" />
        </header>
        <Divider />
        <p>
        Find out Tips & Tricks to have the Best Local Experience 
        </p>
        <Divider />
        <Blog/>
      </div>
    );
  }
}

export default Home;
