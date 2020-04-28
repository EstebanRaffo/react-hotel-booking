import React, { Component } from "react";
import Datefilter from "./datefilter";
import Optionfilter from "./optionsfilter";
import moment from "moment";

class filters extends Component {
  constructor(props) {
    super(props);
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters(e) {
    const { name, value } = e.target;
    this.props.onFilterCHange(name, value);
  }

  render() {
    const {
      filters: { availabilityFrom, availabilityTo, country, price, rooms },
      data,
    } = this.props;

    const uniqueCountries = [...new Set(data.map((country) => country.country))],
      uniquePrices = [...new Set(data.map((price) => price.price))].sort((a, b) => a - b),
      uniqueRooms = [...new Set(data.map((rooms) => rooms.rooms - (rooms.rooms % 10)))].sort((a, b) => a - b);
    uniqueRooms.shift();

    const labelsPrice = ["$", "$$", "$$$", "$$$$"],
      labelsRooms = ["Hasta 10", "Hasta 20", "Hasta 30", "Hasta 40"];

    return (
      <nav className="navbar is-info" style={{ justifyContent: "center" }}>
        <div className="navbar-item">
          <Datefilter
            name="availabilityFrom"
            date={moment(availabilityFrom)}
            icon="fa-sign-in-alt"
            onDateChange={this.handleFilters}
          />
        </div>
        <div className="navbar-item">
          <Datefilter
            name="availabilityTo"
            date={moment(availabilityTo)}
            icon="fa-sign-out-alt"
            onDateChange={this.handleFilters}
          />
        </div>
        <div className="navbar-item">
          <Optionfilter
            name="country"
            options={uniqueCountries}
            selected={country}
            defaultSel="Todos los países"
            icon="fa-globe"
            onOptionChange={this.handleFilters}
          />
        </div>
        <div className="navbar-item">
          <Optionfilter
            name="price"
            options={uniquePrices}
            selected={price}
            defaultSel="Cualquier precio"
            label={labelsPrice}
            icon="fa-dollar-sign"
            onOptionChange={this.handleFilters}
          />
        </div>
        <div className="navbar-item">
          <Optionfilter
            name="rooms"
            options={uniqueRooms}
            selected={rooms}
            defaultSel="Cualquier tamaño"
            label={labelsRooms}
            icon="fa-bed"
            onOptionChange={this.handleFilters}
          />
        </div>
      </nav>
    );
  }
}

export default filters;
