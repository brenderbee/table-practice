import React from 'react';
import ColumnHeader from './ColumnHeader';
import './../assets/css/TableHeader.css';
import PropTypes from 'prop-types';

function TableHeader(props) {
  return (
    <div className="table-header">
      {props.columnList.map((header, index) =>
        <ColumnHeader
          key={index}
          header={header}
        />
      )}
    </div>
  );
}

TableHeader.propTypes = {
  columnList: PropTypes.array
};

export default TableHeader;
