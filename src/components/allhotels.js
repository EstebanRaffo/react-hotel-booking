import React, { Component } from "react";
import Hotel from "./hotel";

class allhotels extends Component {

  render() {
    const { data } = this.props;

    return (
      <section className="section" style={{ marginTop: "3em" }}>
        <div className="container">
          <div className="columns is-multiline">
            {data.length > 0 ? (
              data.map((data, i) => (
                <div key={i} className="column is-one-third">
                  <Hotel data={data} />
                </div>
              ))
            ) : (
              <article className="message is-warning">
                <div className="message-body">
                  No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default allhotels;
