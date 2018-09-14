import React from 'react';
import './../assets/css/SortArrow.css';
import doubleArrow from './../assets/icons/svg/004-double-arrow.svg';
import ascArrow from './../assets/icons/svg/006-up-arrow.svg';
import descArrow from './../assets/icons/svg/005-down-arrow.svg';
import PropTypes from 'prop-types';

function SortArrow(props) {

  function renderSortArrow(order, header, active) {
    if (order === null || header !== active) {
      return <img src={doubleArrow} height="15" alt="Double sort arrow"/>;
    } else if (order === 'asc') {
      return <img src={ascArrow} height="15" alt="Ascending sort arrow"/>;
    } else {
      return <img src={descArrow} height="15" alt="Descending sort arrow"/>;
    }
  }

  return (
    <div className="sort-arrow">
      {renderSortArrow(props.sortOrder, props.header, props.activeSort)}
    </div>
  );
}

SortArrow.propTypes = {
  sortOrder: PropTypes.string,
  header: PropTypes.string,
  activeSort: PropTypes.string
};


export default SortArrow;
