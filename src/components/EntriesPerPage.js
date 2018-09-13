import React from 'react';
import './../assets/css/EntriesPerPage.css';

function EntriesPerPage() {
  return (
    <div className="entries-per-page">
      <p>entries per page</p>
      <select>
        <option value="All">All</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

export default EntriesPerPage;
