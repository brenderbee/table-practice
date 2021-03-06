import React from 'react';
import ColumnHeader from './ColumnHeader';
import './../assets/css/TableHeader.css';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function TableHeader(props) {
  return (
    <div className="table-header">
      {props.columnList.map((header, index) =>
        <ColumnHeader
          key={v4()}
          header={header}
          onClickSort={props.onClickSort}
          sortOrder={props.sortOrder}
          activeSort={props.activeSort}
        />
      )}
    </div>
  );
}

TableHeader.propTypes = {
  columnList: PropTypes.array,
  onClickSort: PropTypes.func,
  sortOrder: PropTypes.string,
  activeSort: PropTypes.string
};

export default TableHeader;
