import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Welcome() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="welcome_header">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="box_container">
        <div className="box_one box" data-aos="zoom-in">
          <div className="card">
            <div className="card-header">
              <img src={require("../image/pastor.jpeg").default} alt="" />
            </div>
            <div className="card-body">
              <div className="card_text">
                <span className="tag tag-teal">Monday</span>
              </div>
              <h4>Family prayer meeting by 8pm on line app</h4>
              {/* <p>
              An exploration into the truck's polarising design
            </p>  */}
            </div>
          </div>
        </div>

        <div className="box_one box" data-aos="fade-up">
          <div className="card">
            <div className="card-header">
              <img src={require("../image/pastormrs.jpeg").default} alt="" />
            </div>
            <div className="card-body">
              <div className="card_text">
                <span className="tag tag-teal">tuesday</span>
              </div>
              <h4>Digging deep by 6:30pm in the church</h4>
              <h4>Hours of possibility in the church by 8:00am</h4>
            </div>
          </div>
        </div>

        <div className="box_one box" data-aos="zoom-out">
          <div className="card">
            <div className="card-header">
              <img src={require("../image/praise.jpeg").default} alt="" />
            </div>
            <div className="card-body">
              <div className="card_text">
                <span className="tag tag-teal">Thursday</span>
              </div>
              <h4>Faith clinic in the church by 6:30pm</h4>
            </div>
          </div>
        </div>

        <div className="box_one box" data-aos="zoom-in-up">
          <div className="card">
            <div className="card-header">
              <img src={require("../image/choirone.jpeg").default} alt="" />
            </div>
            <div className="card-body">
              <div className="card_text">
                <span className="tag tag-teal">Sunday service</span>
              </div>
              <div>
                <h4>First service - 8:00am</h4>
                <h4>Second service - 10:30am</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="box_one box" data-aos="zoom-in-down">
          <div className="card">
            <div className="card-header">
              <img
                src={require("../image/instrumentalist.jpeg").default}
                alt=""
              />
            </div>
            <div className="card-body">
              <div className="card_text">
                <span className="tag tag-teal">First friday of the month</span>
              </div>

              <h4>National Holy ghost service at the camp by 7pm</h4>
            </div>
          </div>
        </div>

        <div className="box_four box"></div>
      </div>
    </div>
  );
}
