import React, { Component } from 'react';
import SortArrow from './SortArrow';

class ColumnHeader extends Component {
  render() {
    return (
      <div>
        <h2>ColumnHeader</h2>
        <SortArrow />
      </div>
    );
  }
}

export default ColumnHeader;
