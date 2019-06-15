import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer" id="location">
        <div className="container">
          <div className="row">
            <div className="col l3 m6 s12">
              <h5 className="white-text">Contacts:</h5>
              <p className="grey-text text-lighten-4">Phone: (857) 250-5201</p>
              <p className="grey-text text-lighten-4">
                Address: 428 Willow st. UNIT 5, Stoughton, MA, 02451
              </p>
              <p className="grey-text text-lighten-4">
                E-mail: hybridcarsma@gmail.com
              </p>
            </div>
            <div className="col l3 m6 s12">
              <h5 className="white-text">Hours:</h5>
              <ul>
                <li>
                  <div className="row m-0 grey-text text-lighten-3">
                    <div className="col s1">Mon:</div>
                    <div className="col s10 offset-s1">9:30 am - 5:30 pm</div>
                  </div>
                </li>
                <li>
                  <div className="row m-0 grey-text text-lighten-3">
                    <div className="col s1">Tue:</div>
                    <div className="col s10 offset-s1">9:30 am - 5:30 pm</div>
                  </div>
                </li>
                <li>
                  <div className="row m-0 grey-text text-lighten-3">
                    <div className="col s1">Wed:</div>
                    <div className="col s10 offset-s1">9:30 am - 5:30 pm</div>
                  </div>
                </li>
                <li>
                  <div className="row m-0 grey-text text-lighten-3">
                    <div className="col s1">Thu:</div>
                    <div className="col s10 offset-s1">9:30 am - 5:30 pm</div>
                  </div>
                </li>
                <li>
                  <div className="row m-0 grey-text text-lighten-3">
                    <div className="col s1">Fri:</div>
                    <div className="col s10 offset-s1">9:30 am - 5:30 pm</div>
                  </div>
                </li>
                <li>
                  <div className="row m-0 grey-text text-lighten-3">
                    <div className="col s1">Sat:</div>
                    <div className="col s10 offset-s1">call</div>
                  </div>
                </li>
                <li>
                  <div className="row m-0 grey-text text-lighten-3">
                    <div className="col s1">Sun:</div>
                    <div className="col s10 offset-s1">closed</div></div>
                </li>
              </ul>
            </div>
            <div className="col l6 s12">
              <img className="map-image-footer" width="100%" alt="Map with directions" src="/assets/images/map.png" />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2019 Hybrid Cars Inc. All Rights Reserved.</div>
        </div>
      </footer>
    );
  }
}
