import React, { Component } from 'react';

import './App.css';

import Header from './header';
import SearchForm from './searchform';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <div id="root"><SearchForm /></div>
        </header>
      </div>
    );
  }
}

export default App;
