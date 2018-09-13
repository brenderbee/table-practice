import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    return (
      <div>
        {this.props.rowData[1]}
      </div>
    );
  }
}

Row.propTypes = {
  rowData: PropTypes.array
};

export default Row;
