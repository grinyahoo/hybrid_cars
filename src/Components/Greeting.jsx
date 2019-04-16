import React from "react";
import { Parallax, Background } from "react-parallax";

export default class Greeting extends React.Component {
  render() {
    return (
      <div id="greeting" className="h-100 parallax-container">
        <Parallax
          blur={0}
          bgImage={require("../images/bg0.jpg")}
          bgImageAlt="Prius Hybrid"
          strength={400}
        >
          <div className="container white-text onescreen d-flex align-items-center">
            <div className="d-flex row light-overlay">
              <div
                className="col s10 l8 offset-s1 offset-l2"
                style={{
                  top: 0,
                  bottom: 0,
                  marginTop: "auto",
                  marginBottom: "auto"
                }}
              >
                <h2 className="">Hybrid specialists</h2>
                <h3 className="flow-text">
                  The best place to bring you hybrid.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="row scroll-arrow pulse text-center">
              <a href="#services">
                <i class="material-icons">arrow_downward</i>
              </a>
            </div>
          </div>
          {/* <div style={{ height: "200px" }} /> */}
        </Parallax>
      </div>
    );
  }
}
