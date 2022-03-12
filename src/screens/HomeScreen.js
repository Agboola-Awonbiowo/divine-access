import React from "react";
import Welcome from "./Welcome";
import Slider from "../components/Slider";

export default function HomeScreen() {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <Welcome />
      </div>
      <div className="connect_area">
        <div className="connect_inner_container">
          <div className="connect_heading">
            <h1>Connect With Us</h1>
          </div>
          <div className="connect_icon">
            <div className="icon_container">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="icon_container">
              <i className="fab fa-skype"></i>
            </div>
            <div className="icon_container">
              <i className="fab fa-google-plus-g"></i>
            </div>
            <div className="icon_container">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
