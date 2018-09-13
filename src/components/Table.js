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
      masterRows: this.parseData(columns, rows),
      masterColumns: columns
    };
    this.parseData = this.parseData.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  parseData(columns, rows) {
    let rowObjects = [];
    for (let i = 0; i < rows.length; i++) {
      let row = {};
      for (let j = columns.length - 1; j > -1; j--) {
        row[columns[j]] = rows[i][j];
      }
      rowObjects.push(row);
    }
    return rowObjects;
  }

  handleSort(header) {
    console.log('sort is triggered');
  }

  render() {
    return (
      <div className="table">
        <TableHeader
          columnList={this.state.masterColumns}
          onClickSort={this.handleSort}
        />
        <RowList
          rowList={this.state.masterRows}
          columnList={this.state.masterColumns}
        />
        <TableFooter />
      </div>
    );
  }
}

export default Table;
