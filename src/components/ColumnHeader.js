import React from 'react';
import SortArrow from './SortArrow';
import './../assets/css/ColumnHeader.css';
import PropTypes from 'prop-types';

function ColumnHeader(props) {

  function handleSendColumnHeader(header) {
    console.log("handleSendColumnHeader: call handleSort()");
    props.onClickSort(header);
  }

  return (
    <div onClick={() => handleSendColumnHeader(props.header)} className="column-header">
      <h2>{props.header}</h2>
      <SortArrow
        sortOrder={props.sortOrder}
        header={props.header}
        activeSort={props.activeSort}
      />
    </div>
  );
}

ColumnHeader.propTypes = {
  header: PropTypes.string,
  onClickSort: PropTypes.func,
  sortOrder: PropTypes.string,
  activeSort: PropTypes.string
};

export default ColumnHeader;
