import React from "react";
import { Parallax } from "react-parallax";

export default class Estimator extends React.Component {

  handleSubmit = (e) => {
    // AJAX to backend
    e.preventDefault();
    console.log("Submit event from", e.target);
  }

  render() {
    return (
      <div id="estimator" className="get-estimate-block">
        <Parallax
          blur={0}
          bgImage={require("../images/accountant-1238598.jpg")}
          bgImageAlt="Hybrid"
          strength={200}
        >
          <div className="container d-flex center-flex onescreen">
            <div
              className="row"
              style={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: "auto"
              }}
            >
              <form className="estimator-form text-center col s12 offset-m1 m10 offset-l2 l8" onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="col s10 offset-s1 dark-text text-center">
                    <h2>Get free estimate</h2>
                  </div>
                  <div className="input-field col s12 m6 xl4">
                    <input id="name" type="text" className="validate" />
                    <label htmlFor="name">Name</label>
                    <span
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      Your contact name.
                    </span>
                  </div>
                  <div className="input-field col s12 m6 xl4">
                    <input id="phone" type="text" className="validate" />
                    <label htmlFor="phone">Phone</label>
                    <span
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      Your phone number
                    </span>
                  </div>
                  <div className="input-field col s12 m6 xl4">
                    <input id="vehicle" type="text" className="validate" />
                    <label htmlFor="vehicle">Vehicle</label>
                    <span
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      Year, Make and Model of your vehicle.
                    </span>
                  </div>
                  <div className="input-field col s12">
                    <textarea id="issue" className="materialize-textarea" />
                    <label htmlFor="issue">Issue</label>
                    <span
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      Briefly describe the issue with your vehicle.
                    </span>
                  </div>
                  <div className="input-field col s12">
                    <button
                      className="btn btn-large waves-effect waves-light "

                      type="submit"
                    >
                      Get Estimate
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
