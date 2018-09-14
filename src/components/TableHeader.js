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
          onClickSort={props.onClickSort}
          sortOrder={props.sortOrder}
        />
      )}
    </div>
  );
}

TableHeader.propTypes = {
  columnList: PropTypes.array,
  onClickSort: PropTypes.func,
  sortOrder: PropTypes.string
};

export default TableHeader;
