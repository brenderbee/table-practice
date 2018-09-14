import React from 'react';
import './../assets/css/SortArrow.css';
import doubleArrow from './../assets/icons/svg/004-double-arrow.svg';
import ascArrow from './../assets/icons/svg/006-up-arrow.svg';
import descArrow from './../assets/icons/svg/005-down-arrow.svg';
import PropTypes from 'prop-types';

function SortArrow(props) {

  function renderSortArrow(state) {
    if (state === null) {
      return <img src={doubleArrow} height="15" alt="Double sort arrow"/>;
    } else if (state === 'asc') {
      return <img src={ascArrow} height="15" alt="Ascending sort arrow"/>;
    } else {
      return <img src={descArrow} height="15" alt="Descending sort arrow"/>;
    }
  }

  return (
    <div className="sort-arrow">
      {renderSortArrow(props.sortOrder)}
    </div>
  );
}

SortArrow.propTypes = {
  sortOrder: PropTypes.string
};


export default SortArrow;
