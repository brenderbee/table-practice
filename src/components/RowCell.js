import React from 'react';
import './../assets/css/RowCell.css';
import PropTypes from 'prop-types';

function RowCell(props) {
  return (
    <div className="row-cell">
      <p>{props.cell}</p>
    </div>
  );
}

RowCell.propTypes = {
  cell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default RowCell;
