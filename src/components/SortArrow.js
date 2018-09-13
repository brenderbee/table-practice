import React from 'react';
import './../assets/css/SortArrow.css';
import doubleArrow from './../assets/icons/svg/004-double-arrow.svg'

function SortArrow() {
  return (
    <div className="sort-arrow">
      <img src={doubleArrow} height="15" alt="Double sort arrow"/>
    </div>
  );
}

export default SortArrow;
