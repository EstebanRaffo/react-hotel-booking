/* eslint-disable */
import React, { Component } from "react";
import DataPrice from "./dataprice";
import DataTag from "./datatag";

class hotel extends Component {
  render() {
    const {
      data: { slug, name, photo, description, city, rooms, price },
    } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={photo} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{name}</p>
          <p>{description}</p>
          <div className="field is-grouped is-grouped-multiline" style={{ marginTop: "1em" }}>
            <DataTag value={city} icon="fa-map-marker" />
            <DataTag value={rooms} icon="fa-bed" />
            <DataPrice value={price} />
          </div>
        </div>
        <div className="card-footer">
          <a href={'/' + slug} className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
            Reservar
          </a>
        </div>
      </div>
    );
  }
}

export default hotel;
