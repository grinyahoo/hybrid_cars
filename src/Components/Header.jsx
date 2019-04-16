import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row d-flex m-0">
            <div className="col s12 m10 offset-m1 ">
              <a href="#" className="brand-name brand-logo left">
                Hybrid Cars Inc.
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#calendar">Calendar</a>
                </li>
                <li>
                  <a href="#estimator">Get Estimate</a>
                </li>
                <li>
                  <a href="#location">Location</a>
                </li>
              </ul>
              <ul className="right hide-on-large-only">
                <li className="tab">
                  <a href="#services">Services</a>
                </li>
                <li className="tab">
                  <a href="#estimator">Get Estimate</a>
                </li>
                <li className="tab">
                  <a href="#location">Location</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-content hide hide-on-large-only">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="#services">Services</a>
            </li>
            <li className="tab">
              <a href="#estimator">Get Estimate</a>
            </li>
            <li className="tab">
              <a href="#location">Location</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
