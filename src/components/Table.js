import React, { Component } from 'react';
import { jsonResponse } from './../fakeData';

const rows = jsonResponse.data;
const columns = jsonResponse.columns;

class Table extends Component {
  render() {
    return (
      <div>
        <h2>Table</h2>
      </div>
    );
  }
}

export default Table;
