import React, { Component } from 'react';
import EntriesPerPage from './EntriesPerPage';

class TableFooter extends Component {
  render() {
    return (
      <div>
        <EntriesPerPage />
      </div>
    );
  }
}

export default TableFooter;
