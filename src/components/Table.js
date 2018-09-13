import React, { Component } from 'react';
import { jsonResponse } from './../fakeData';
import TableHeader from './TableHeader';
import RowList from './RowList';
import TableFooter from './TableFooter';
import './../assets/css/Table.css';

const rows = jsonResponse.data;
const columns = jsonResponse.columns;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterRows: rows,
      masterColumns: columns
    };
  }

  render() {
    return (
      <div className="table">
        <TableHeader
          columnList={this.state.masterColumns}
        />
        <RowList
          rowList={this.state.masterRows}
        />
        <TableFooter />
      </div>
    );
  }
}

export default Table;
