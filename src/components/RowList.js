import React from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

function RowList(props) {
  return (
    <div>
      {props.rowList.map((rowData, index) =>
        <Row
          key={index}
          rowData={rowData}
        />
      )}
    </div>
  );
}

RowList.propTypes = {
  rowList: PropTypes.array
};

export default RowList;
