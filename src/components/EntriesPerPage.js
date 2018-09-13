import React from 'react';

function EntriesPerPage() {
  return (
    <div>
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
