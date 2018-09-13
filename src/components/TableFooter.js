import React, { Component } from 'react';
import EntriesPerPage from './EntriesPerPage';
import EntriesNav from './EntriesNav';

class TableFooter extends Component {
  render() {
    return (
      <div>
        <EntriesPerPage />
        <EntriesNav />
      </div>
    );
  }
}

export default TableFooter;
