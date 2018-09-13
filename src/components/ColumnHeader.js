import React from 'react';
import SortArrow from './SortArrow';
import './../assets/css/ColumnHeader.css';
import PropTypes from 'prop-types';

function ColumnHeader(props) {

  function handleSendColumnHeader(header) {
    props.onClickSort(header);
  }

  return (
    <div onClick={() => handleSendColumnHeader(props.header)} className="column-header">
      <h2>{props.header}</h2>
      <SortArrow />
    </div>
  );
}

ColumnHeader.propTypes = {
  header: PropTypes.string,
  onClickSort: PropTypes.func
};

export default ColumnHeader;
