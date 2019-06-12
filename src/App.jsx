import React from "react";
import Header from "./Components/Header";
import Greeting from "./Components/Greeting";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
// import Calendar from "./Components/Calendar";
import Estimator from "./Components/Estimator";
// import Location from "./Components/Location";
import M from "materialize-css";

export default class App extends React.Component {
  state = {};
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems, {scrollOffset: 200});
    });
  }
  render() {
    return (
      <div className="">
        <Header />
        <Greeting />
        <Services />
        <Estimator />
        <Footer />
      </div>
    );
  }
}
