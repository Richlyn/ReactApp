import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Logo from "../../Assets/MYtineraryLogo.png";
import Arrow from "../../Assets/circled-right-2.png";
import Header from "../../Components/Header/Header";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <header className="Home-header">
          <img src={Logo} className="MYtinerary-logo" alt="logo" />
        </header>
        <p>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>

        <section>
          <h2>Start Browsing</h2>
          <img src={Arrow} className="circledArrow" alt="circle arrow" />
        </section>
        <section>
          <p>Want to build your own MYtinerary?</p>
          <div class="Links">
            <a
              className="Home-link"
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Log in
            </a>
            <a
              className="Home-link"
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Create Account
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
