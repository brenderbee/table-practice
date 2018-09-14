import React, { Component } from 'react';
import { jsonResponse } from './../fakeData';
import TableHeader from './TableHeader';
import RowList from './RowList';
import TableNav from './TableNav';
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
      masterPaginatedRows: this.parseData(columns, rows),
      currentPage: 1,
      pages: 1
    };
    this.parseData = this.parseData.bind(this);
    this.handleSortOrder = this.handleSortOrder.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleActiveSort = this.handleActiveSort.bind(this);
    this.handleChangeEntries = this.handleChangeEntries.bind(this);
    this.getPaginatedRows = this.getPaginatedRows.bind(this);
    this.handleChangeEntries = this.handleChangeEntries.bind(this);
    this.handleCurrentPageChange = this.handleCurrentPageChange.bind(this);
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

  getPaginatedRows(entries, page) {
    const beginIndex = entries * (page - 1),
          endIndex = entries * page;
    let pages = Math.ceil(this.state.masterRows.length / entries),
        paginatedRows = this.state.masterRows.slice(beginIndex, endIndex);
    if ( entries === 1) {
      paginatedRows = this.state.masterRows.slice();
      pages = 1;
    }
    this.setState({currentPage: 1});
    this.setState({pages});
    this.setState({masterPaginatedRows: paginatedRows});
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
    this.getPaginatedRows(this.state.entries, this.state.currentPage);
  }

  handleChangeEntries(entries) {
    this.getPaginatedRows(entries, 1);
    this.setState({currentPage: 1});
    this.setState({entries});
  }

  handleCurrentPageChange(newPage) {
    this.getPaginatedRows(this.state.entries, newPage);
    this.setState({currentPage: newPage});
  }

  componentDidUpdate() {
    console.log(this.state.masterRows);
  }

  render() {
    return (
      <div className="table">
        <TableNav
          onChangeEntries={this.handleChangeEntries}
          currentPage={this.state.currentPage}
          onChangeCurrentPage={this.handleCurrentPageChange}
          pages={this.state.pages}
          />
        <div className="table-body">
          <TableHeader
            columnList={this.state.masterColumns}
            onClickSort={this.handleSort}
            sortOrder={this.state.masterSortOrder}
            activeSort={this.state.activeSort}
            />
          <RowList
            rowList={this.state.masterPaginatedRows}
            columnList={this.state.masterColumns}
            />
        </div>
      </div>
    );
  }
}

export default Table;
