import React, { Component } from "react";

class optionsfilter extends Component {
  render() {
    const { options, selected, icon, defaultSel, label } = this.props;

    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{ width: "100%" }}>
            <select
              value={selected}
              style={{ width: "100%" }}
              onChange={this.props.onOptionChange}
              name={this.props.name}
            >
              <option value="">{defaultSel}</option>
              {options.map((option, i) => {
                return (
                  <option key={i} value={option}>
                    {label !== undefined ? label[i] : option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className={`fas ${icon}`}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default optionsfilter;
