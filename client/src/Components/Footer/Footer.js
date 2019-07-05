import React, { Component } from "react";
import Homebtn from "../../Assets/homeIcon.png";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <img src={Homebtn} className="homeIcon" alt="home" />
        </footer>
      </div>
    );
  }
}
export default Footer;
