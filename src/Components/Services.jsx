import React from "react";

export default class Services extends React.Component {
  state = {
    services: [
      {
        title: "Oil change",
        text: "Short text about oil. How import to use Full synthetic oil, change oil filter every oil change, importance of checking oil frequently in old cars",
        badge: "*40$+",
        img: "assets/images/oil.jpg"
      },
      {
        title: "Brakes",
        text: "Here will be some text that explains why brake maintenance is important, and how you know when it is due.",
        badge: "*200$",
        img: "assets/images/brakes.jpg"
      },
      {
        title: "Hybrid System",
        text: "Diagnostics and repair of any mulfunction in hybrid system. think more about this section",
        badge: "",
        img: "assets/images/hybrid.jpg"
      },
      {
        title: "Suspension",
        text: "Here will be some text that explains why suspension maintenance is important, and how you know when it is due.",
        badge: "40$+",
        img: "assets/images/suspension.jpg"
      },
      {
        title: "Hybrid Battery",
        text: "Here will be some text that explains why battery maintenance is important, and how you know when it is due. + Hybrid battery packs in stock. Info about costs, core price, warranty and how long it takes to replace a pack",
        badge: "900$+",
        img: "assets/images/battery.jpg"
      },
      {
        title: "Tires",
        text: "Here will be some text about tire condition, and how you know when you need a new set. Also what sizes we usually keep in stock.",
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
      <section id="services" className="container h-100">
        <h3>Services</h3>
        <div className="row">{cards}</div>
      </section>
    );
  }
}

class ServicesItem extends React.Component {
  render() {
    const { title, text, badge, img } = this.props.service;
    return (
      <div className="col s12 m4 service-card">
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={img} alt={title} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal teal">
              <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
              <p>{text}</p>
            </div>
          </div>
      </div>
    );
  }
}
