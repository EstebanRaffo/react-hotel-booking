import React, { Component } from "react";

class Datefilter extends Component {

  render() {
    const { date, icon } = this.props;

    return (
      <div className="field">
        <div className="control has-icons-left">
          <input className="input" type="date" min="2020-04-20" max="2020-06-30" value={date.format("YYYY-MM-DD")} onChange={ this.props.onDateChange } name={ this.props.name }/>
          <span className="icon is-small is-left">
            <i className={`fas ${icon}`}></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Datefilter;