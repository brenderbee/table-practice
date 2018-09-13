import React, { Component } from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class RowList extends Component {
  render() {
    return (
      <div>
        {this.props.rowList.map((rowData, index) =>
          <Row
            key={index}
            rowData={rowData}
          />
        )}
      </div>
    );
  }
}

RowList.propTypes = {
  rowList: PropTypes.array
};

export default RowList;
