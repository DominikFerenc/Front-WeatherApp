import React from 'react';
import './App.css';
import LeftMenu from './Components/Menu';
import Website from './Components/Website';
import { SearchBar } from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="left-menu">
      <LeftMenu/>
      <SearchBar/>
      </div>
    </div>
  );
}

export default App;
