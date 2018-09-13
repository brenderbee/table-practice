import React from 'react';
import RowCell from './RowCell';
import './../assets/css/Row.css';
import PropTypes from 'prop-types';

function Row(props) {
  return (
    <div className="row">
      {props.rowData.map((cell, index) =>
        <RowCell
          key={index}
          cell={cell}
          />
      )}
    </div>
  );
}

Row.propTypes = {
  rowData: PropTypes.array
};

export default Row;
