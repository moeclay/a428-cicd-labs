import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Proyek Akhir CI/CD</h1>
        </header>
        <p className="App-intro">
          Latihan CI/CD dengan Jenkins, Prometheus &amp; Grafana.
        </p>
      </div>
    );
  }
}

export default App;
