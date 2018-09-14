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
      masterSortOrder: null,
      activeSort: null,
      entries: 1,
    };
    this.parseData = this.parseData.bind(this);
    this.handleSortOrder = this.handleSortOrder.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleActiveSort = this.handleActiveSort.bind(this);
    this.handleChangeEntries = this.handleChangeEntries.bind(this);
    this.getPaginatedRows = this.getPaginatedRows.bind(this);
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

  handleActiveSort(string) {
    this.setState({activeSort: string});
  }

  handleSort(header) {
    let masterRows = this.state.masterRows.slice();
    masterRows = orderBy(masterRows, header, this.handleSortOrder());
    this.handleActiveSort(header);
    this.setState({masterRows});
  }

  handleChangeEntries(entries){
    this.setState({entries});
  }

  getPaginatedRows(entries, page) {
    const pages = Math.ceil(this.state.masterRows.length / entries),
          beginIndex = entries * (page - 1),
          endIndex = entries * page - 1;
    console.log("begin index: " , beginIndex);
    console.log("end index: " , endIndex);
  }

  componentDidUpdate() {
    this.getPaginatedRows(this.state.entries, 1);
  }

  render() {
    return (
      <div className="table">
        <TableHeader
          columnList={this.state.masterColumns}
          onClickSort={this.handleSort}
          sortOrder={this.state.masterSortOrder}
          activeSort={this.state.activeSort}
        />
        <RowList
          rowList={this.state.masterRows}
          columnList={this.state.masterColumns}
        />
        <TableFooter
          onChangeEntries={this.handleChangeEntries}
        />
      </div>
    );
  }
}

export default Table;
