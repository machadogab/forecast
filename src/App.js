import React, { Component } from 'react';
import SearchBar from './Containers/SearchBar'
import CityList from './Containers/CityList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <CityList />
      </div>
    );
  }
}

export default App;
