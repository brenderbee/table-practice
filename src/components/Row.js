import React from 'react';
import RowCell from './RowCell';
import './../assets/css/Row.css';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function Row(props) {
  return (
    <div className="row">
      {props.columnList.map((header, index) =>
        <RowCell
          key={v4()}
          cell={props.rowObject[header]}
        />
      )}
    </div>
  );
}

Row.propTypes = {
  rowObject: PropTypes.object,
  columnList: PropTypes.array
};

export default Row;
