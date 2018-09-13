import React, { Component } from 'react';
import SortArrow from './SortArrow';
import './../assets/css/ColumnHeader.css';
import PropTypes from 'prop-types';

class ColumnHeader extends Component {
  render() {
    return (
      <div className="column-header">
        <h2>{this.props.header}</h2>
        <SortArrow />
      </div>
    );
  }
}

ColumnHeader.propTypes = {
  header: PropTypes.string
};

export default ColumnHeader;
