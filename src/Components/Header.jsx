import React from "react";
import M from "materialize-css";

export default class Header extends React.Component {

  componentDidMount() {
    M.AutoInit();
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.sidenav');
    //   var instances = M.Sidenav.init(elems, options);
    // });
  }

  render() {
    return (
      <React.Fragment>
      <nav>
        <div className="nav-wrapper">
          <div className="row d-flex m-0">
            <div className="col s12 m10 offset-m1 ">
              <a href="/" className="brand-name brand-logo left">
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
              <div className="right hide-on-large-only">
                  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
            </div>
          </div>
        </div>

      </nav>
      <ul id="slide-out" className="sidenav">
        <li className="tab">
          <a href="#services" className="sidenav-close">Services</a>
        </li>
        <li className="tab">
          <a href="#estimator"  className="sidenav-close">Get Estimate</a>
        </li>
        <li className="tab">
          <a href="#location" className="sidenav-close">Location!</a>
        </li>
      </ul>
    </React.Fragment>
    );
  }
}


// <div className="nav-content hide hide-on-large-only">
//   <ul className="tabs tabs-transparent">
//     <li className="tab">
//       <a href="#services">Services</a>
//     </li>
//     <li className="tab">
//       <a href="#estimator">Get Estimate</a>
//     </li>
//     <li className="tab">
//       <a href="#location">Location</a>
//     </li>
//   </ul>
// </div>

// <ul className="right hide-on-large-only">
//   <li className="tab">
//     <a href="#services">Services</a>
//   </li>
//   <li className="tab">
//     <a href="#estimator">Get Estimate</a>
//   </li>
//   <li className="tab">
//     <a href="#location">Location!</a>
//   </li>
// </ul>
