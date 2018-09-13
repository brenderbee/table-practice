import React from 'react';
import EntriesPerPage from './EntriesPerPage';
import EntriesNav from './EntriesNav';
import './../assets/css/TableFooter.css';

function TableFooter(props) {
  return (
    <div className="table-footer">
      <EntriesPerPage />
      <EntriesNav />
    </div>
  );
}

export default TableFooter;
