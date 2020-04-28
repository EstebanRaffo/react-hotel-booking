import React, { Component } from "react";
import "./App.css";
import Hero from "./components/hero";
import Filters from "./components/filters";
import Hotels from "./components/allhotels";
// eslint-disable-next-line
import hotelsData from "./scripts/data";
import moment from "moment";
import "moment/locale/es";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: hotelsData,
      filters: {
        availabilityFrom: moment().format("YYYY-MM-DD"),
        availabilityTo: moment().add(1, "M").format("YYYY-MM-DD"),
        country: "",
        price: "",
        rooms: "",
      },
      filteredHotels: hotelsData,
    };
    this.setFilters = this.setFilters.bind(this);
    this.triggerFilters = this.triggerFilters.bind(this);
  }

  setFilters(name, value) {
    const eachFilter = { ...this.state.filters, [name]: value };
    const displayHotels = this.triggerFilters(eachFilter);
    this.setState({ filters: eachFilter, filteredHotels: displayHotels });
  }

  triggerFilters(filters) {
    const filterArray = (allHotels, filters) => {
      const filterKeys = Object.keys(filters);
      return allHotels.filter((hotel) => {
        return filterKeys.every((key) => {
          if (!filters[key].length) {
            return true;
          }
          switch (key) {
            case "availabilityFrom":
              return filters[key] <= hotel[key];
            case "availabilityTo":
            case "rooms":
              return filters[key] >= hotel[key];
            default:
              return filters[key].includes(hotel[key]);
          }
        });
      });
    };

    return filterArray(this.state.hotels, filters);
  }

  render() {
    return (
      <div>
        <Hero filters={this.state.filters} data={this.state.filteredHotels} />
        <Filters filters={this.state.filters} data={this.state.hotels} onFilterCHange={this.setFilters} />
        <Hotels data={this.state.filteredHotels} />
      </div>
    );
  }
}

export default App;