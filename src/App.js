import React from 'react';
import TopTenSongs from './components/TopTenSongs';
import TopFridaySongs from './components/TopFridaySongs';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className="title">
        <div className="logo">
          <img 
            src="https://logos-world.net/wp-content/uploads/2021/04/Youtube-Music-Emblem.png"
            alt="youtube music logo"></img>
        </div>
      </h1>

      <div className="cards">
        <TopTenSongs />
        <TopFridaySongs />
      </div>
    </div>
  );
}

export default App;