import React from 'react';
import SortArrow from './SortArrow';
import './../assets/css/ColumnHeader.css';
import PropTypes from 'prop-types';

function ColumnHeader(props) {
  return (
    <div className="column-header">
      <h2>{props.header}</h2>
      <SortArrow />
    </div>
  );
}

ColumnHeader.propTypes = {
  header: PropTypes.string
};

export default ColumnHeader;
