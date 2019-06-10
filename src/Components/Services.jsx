import React from "react";

export default class Services extends React.Component {
  state = {
    services: [
      {
        title: "Oil change",
        text: "Full synthetic oil",
        badge: "*40$+",
        img: "assets/images/oil.jpg"
      },
      {
        title: "Brakes",
        text: "",
        badge: "*200$",
        img: "assets/images/brakes.jpg"
      },
      {
        title: "Hybrid System",
        text: "Diagnostics and repair of any mulfunction in hybrid system",
        badge: "",
        img: "assets/images/hybrid.jpg"
      },
      {
        title: "Suspension",
        text: "",
        badge: "40$+",
        img: "assets/images/suspension.jpg"
      },
      {
        title: "Hybrid Battery",
        text: "Hybrid battery packs in stock",
        badge: "900$+",
        img: "assets/images/battery.jpg"
      },
      {
        title: "Wheels and Tires",
        text: "Tires of original sizes are in stock",
        badge: "900$+",
        img: "assets/images/tire.jpg"
      }
    ]
  };

  render() {
    const cards = this.state.services.map((service, index) => {
      return <ServicesItem key={index} service={service} />;
    });
    return (
      <div id="services" className="container h-100">
        <h2>Services</h2>
        <div className="row">{cards}</div>
      </div>
    );
  }
}

class ServicesItem extends React.Component {
  render() {
    const { title, text, badge, img } = this.props.service;
    return (
      <div className="col s12 m4 service-card">
        <div className="card">
          <div className="card-image service-card-image">
            <img src={img} alt={title}/>
            <span className="card-title w-100 dark-overlay">{title}</span>
          </div>
        </div>
      </div>
    );
  }
}
