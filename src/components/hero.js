import React, { Component } from "react";
import moment from "moment";

class Hero extends Component {
  render() {
    const {
      filters: { availabilityFrom, availabilityTo, country, price, rooms },
      data,
    } = this.props;

    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Reserva tu hotel</h1>
            <h2 className="subtitle">
              Encontramos <strong>{data.length}</strong> hoteles disponibles, desde el{" "}
              <strong>{moment(availabilityFrom).format("D [de] MMMM [del] YYYY")} </strong>
              hasta el <strong>{moment(availabilityTo).format("D [de] MMMM [del] YYYY")}</strong>
              {country !== "" && " en " + country}
              {price > 0 && " por el valor de $" + price}
              {rooms > 0 && " y de hasta " + rooms + " habitaciones"}
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
