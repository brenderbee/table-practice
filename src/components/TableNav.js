import React from 'react';
import EntriesPerPage from './EntriesPerPage';
import EntriesNav from './EntriesNav';
import './../assets/css/TableNav.css';
import PropTypes from 'prop-types';

function TableNav(props) {
  return (
    <div className="table-nav">
      <EntriesPerPage
        onChangeEntries={props.onChangeEntries}
      />
      <EntriesNav
        onChangeCurrentPage={props.onChangeCurrentPage}
        pages={props.pages}
        currentPage={props.currentPage}
      />
    </div>
  );
}

TableNav.propTypes = {
  onChangeEntries: PropTypes.func,
  onChangeCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
  pages: PropTypes.number
};

export default TableNav;
