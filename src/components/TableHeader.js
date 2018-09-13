import React, { Component } from 'react';
import ColumnHeader from './ColumnHeader';
import PropTypes from 'prop-types';

class TableHeader extends Component {
  render() {
    return (
      <div>
        {this.props.columnList.map((header, index) =>
          <ColumnHeader
            key={index}
            header={header}
          />
        )}
      </div>
    );
  }
}

TableHeader.propTypes = {
  columnList: PropTypes.array
};

export default TableHeader;
