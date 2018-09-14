import React from 'react';
import Row from './Row';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function RowList(props) {
  return (
    <div>
      {props.rowList.map((rowObject, index) =>
        <Row
          key={v4()}
          rowObject={rowObject}
          columnList={props.columnList}
        />
      )}
    </div>
  );
}

RowList.propTypes = {
  rowList: PropTypes.array,
  columnList: PropTypes.array
};

export default RowList;
