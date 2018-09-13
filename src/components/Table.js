import React, { Component } from 'react';
import { jsonResponse } from './../fakeData';
import TableHeader from './TableHeader';

const rows = jsonResponse.data;
const columns = jsonResponse.columns;

class Table extends Component {
  render() {
    return (
      <div>
        <TableHeader />
      </div>
    );
  }
}

export default Table;
