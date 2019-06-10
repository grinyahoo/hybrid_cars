import React from "react";
import Header from "./Components/Header";
import Greeting from "./Components/Greeting";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
// import Calendar from "./Components/Calendar";
import Estimator from "./Components/Estimator";
import Location from "./Components/Location";

export default class App extends React.Component {
  state = {};
  componentDidMount() {

  }
  render() {
    return (
      <div className="">
        <Header />
        <Greeting />
        <Services />
        <Estimator />
        <Location />
        <Footer />
      </div>
    );
  }
}