import React, { Component } from 'react';
import { jsonResponse } from './../fakeData';
import TableHeader from './TableHeader';
import RowList from './RowList';
import TableFooter from './TableFooter';
import { orderBy } from 'lodash';
import './../assets/css/Table.css';

const rows = jsonResponse.data;
const columns = jsonResponse.columns;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterRows: this.parseData(columns, rows),
      masterColumns: columns,
      masterSortOrder: null
    };
    this.parseData = this.parseData.bind(this);
    this.handleSortOrder = this.handleSortOrder.bind(this);
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

  handleSortOrder() {
    if (this.state.masterSortOrder === null || this.state.masterSortOrder === 'desc') {
      this.setState({masterSortOrder: 'asc'});
      return 'asc';
    } else {
      this.setState({masterSortOrder: 'desc'});
      return 'desc';
    }
  }

  handleSort(header) {
    let masterRows = this.state.masterRows.slice();
    masterRows = orderBy(masterRows, header, this.handleSortOrder());
    this.setState({masterRows});
  }

  componentDidUpdate() {
    console.log(this.state.masterRows);
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
