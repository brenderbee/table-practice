import React from 'react';
import EntriesPerPage from './EntriesPerPage';
import EntriesNav from './EntriesNav';

function TableFooter(props) {
  return (
    <div>
      <EntriesPerPage />
      <EntriesNav />
    </div>
  );
}

export default TableFooter;
