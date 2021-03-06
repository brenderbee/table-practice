import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
        <p className="credits">Icons made by Freepik from www.flaticon.com</p>
      </div>
    );
  }
}

export default App;
