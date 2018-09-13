import React, { Component } from 'react';
import RowCell from './RowCell';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    return (
      <div>
        {this.props.rowData.map((cell, index) =>
          <RowCell
            key={index}
            cell={cell}
          />
        )}
      </div>
    );
  }
}

Row.propTypes = {
  rowData: PropTypes.array
};

export default Row;
