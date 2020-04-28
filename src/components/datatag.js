import React, { Component } from 'react';

class datatag extends Component {
    render() {
        const { value, icon } = this.props;

        return (
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-medium is-info">
                  <i className={`fas ${icon}`}></i>
                </span>
                <span className="tag is-medium">{value}</span>
              </div>
            </div>
        );
    }
}

export default datatag;