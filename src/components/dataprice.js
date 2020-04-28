import React, { Component } from "react";

class dataprice extends Component {
  render() {
    const { value } = this.props;

    let priceLogic = [];
    for (let i = 1; i <= 4; i++) {
      priceLogic.push(i <= value);
    }

    return (
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">{priceLogic.map((i, key) => (i === true ? <i key={key} className="fas fa-dollar-sign" style={{ margin: "0 .125em" }}></i> : <i key={key} className="fas fa-dollar-sign" style={{ margin: "0 .125em", opacity: ".25" }}></i>))}</span>
        </div>
      </div>
    );
  }
}

export default dataprice;
