import React, { Component } from 'react';
import { jsonResponse } from './../fakeData';
import TableHeader from './TableHeader';
import RowList from './RowList';
import TableFooter from './TableFooter';
import './../assets/css/Table.css';

const rows = jsonResponse.data;
const columns = jsonResponse.columns;

class Table extends Component {
  render() {
    return (
      <div class="table">
        <TableHeader />
        <RowList />
        <TableFooter />
      </div>
    );
  }
}

export default Table;
