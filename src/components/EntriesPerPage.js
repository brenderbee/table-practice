import React from 'react';
import './../assets/css/EntriesPerPage.css';
import PropTypes from 'prop-types';

function EntriesPerPage(props) {

  function handleSendEntries() {
    props.onChangeEntries();
  }

  return (
    <div className="entries-per-page">
      <p>entries per page</p>
      <select onChange={handleSendEntries}>
        <option value="All">All</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

EntriesPerPage.propTypes = {
  onChangeEntries: PropTypes.func
};

export default EntriesPerPage;
