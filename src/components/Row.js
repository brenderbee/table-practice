import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    return (
      <div>
        {this.props.item[1]}
      </div>
    );
  }
}

Row.propTypes = {
  item: PropTypes.array
};

export default Row;
