import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l3 s12">
              <h5 className="white-text">Contacts:</h5>
              <p className="grey-text text-lighten-4">Phone: (857) 250-5201</p>
              <p className="grey-text text-lighten-4">
                Address: 428 Willow st. UNIT 5, Stoughton, MA, 02451
              </p>
              <p className="grey-text text-lighten-4">
                E-mail: hybridcarsma@gmail.com
              </p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Hours:</h5>
              <ul>
                <li>
                  <div className="grey-text text-lighten-3">
                    Mon: 9:30 am - 5:30 pm
                  </div>
                </li>
                <li>
                  <div className="grey-text text-lighten-3">
                    Tue: 9:30 am - 5:30 pm
                  </div>
                </li>
                <li>
                  <div className="grey-text text-lighten-3">
                    Wed: 9:30 am - 5:30 pm
                  </div>
                </li>
                <li>
                  <div className="grey-text text-lighten-3">
                    Thu: 9:30 am - 5:30 pm
                  </div>
                </li>
                <li>
                  <div className="grey-text text-lighten-3">
                    Fri: 9:30 am - 5:30 pm
                  </div>
                </li>
                <li>
                  <div className="grey-text text-lighten-3">Sat: call</div>
                </li>
                <li>
                  <div className="grey-text text-lighten-3">Sun: closed</div>
                </li>
              </ul>
            </div>
            <div className="col l6 s12" id="location">
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
