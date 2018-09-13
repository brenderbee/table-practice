import React, { Component } from 'react';
import './../assets/css/RowCell.css';
import PropTypes from 'prop-types';

class RowCell extends Component {
  render() {
    return (
      <div className="row-cell">
        <p>{this.props.cell}</p>
      </div>
    );
  }
}

RowCell.propTypes = {
  cell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default RowCell;
