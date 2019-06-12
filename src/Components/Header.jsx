import React from "react";
import M from "materialize-css";

export default class Header extends React.Component {

  handleAnchor = (e) => {
    e.preventDefault();
    const {name} = e.target;
    document.querySelector(`#${name}`).scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {edge: "left"});
    });
  }

  render() {
    return (
      <React.Fragment>
      <nav>
        <div className="nav-wrapper">
          <div className="row d-flex m-0">
            <div className="col s12 m10 offset-m1 offset-l1">
              <a href="/" className="brand-name brand-logo left">
                Hybrid Cars Inc.
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="/" name="services" onClick={this.handleAnchor.bind(this)}>Services</a>
                </li>
                <li>
                  <a href="/" name="estimator" onClick={this.handleAnchor.bind(this)}>Get Estimate</a>
                </li>
                <li>
                  <a href="/" name="location" onClick={this.handleAnchor.bind(this)}>Contacts</a>
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
          <a href="/" name="services" className="sidenav-close" onClick={this.handleAnchor.bind(this)}>Services</a>
        </li>
        <li className="tab">
          <a href="/" name="estimator" className="sidenav-close" onClick={this.handleAnchor.bind(this)}>Get Estimate</a>
        </li>
        <li className="tab">
          <a href="/" name="location" className="sidenav-close" onClick={this.handleAnchor.bind(this)}>Contacts</a>
        </li>
      </ul>
    </React.Fragment>
    );
  }
}
