import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RowCell extends Component {
  render() {
    return (
      <div>{this.props.cell}</div>
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
