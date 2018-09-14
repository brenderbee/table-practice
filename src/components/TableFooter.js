import React from 'react';
import EntriesPerPage from './EntriesPerPage';
import EntriesNav from './EntriesNav';
import './../assets/css/TableFooter.css';
import PropTypes from 'prop-types';

function TableFooter(props) {
  return (
    <div className="table-footer">
      <EntriesPerPage
        onChangeEntries={props.onChangeEntries}
      />
      <EntriesNav
        onChangeCurrentPage={props.onChangeCurrentPage}
        pages={props.pages}
      />
    </div>
  );
}

TableFooter.propTypes = {
  onChangeEntries: PropTypes.func,
  onChangeCurrentPage: PropTypes.func,
  pages: PropTypes.number
};

export default TableFooter;
