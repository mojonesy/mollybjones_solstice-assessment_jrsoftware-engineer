import React, { useState } from 'react';
import TopTenSongs from './components/TopTenSongs';
import TopFridaySongs from './components/TopFridaySongs';
import './App.css';
import findTopTenSongs from './utils/findTopTenSongs';
import sortByFridayAfterFour from './utils/sortByFridayAfterFour';
import history from "./data/listen_history.json";

function App() {
  const [topTen, setTopTen] = useState([]);
  const [topFriday, setTopFriday] = useState([]);
  const [error, setError] = useState(null);

  // top ten songs handler
  const handleTopTen = (e) => {
    e.preventDefault();
    
    const getData = () => {
      return Promise.resolve(findTopTenSongs(history));
    }
    getData()
      .then(data => setTopTen(data))
      .catch(err => setError(err));
  }

  // top ten friday after 4pm songs handler
  const handleTopFriday = (e) => {
    e.preventDefault();

    const getData = () => {
      return Promise.resolve(sortByFridayAfterFour(history));
    }
    getData()
      .then(data => setTopFriday(data))
      .catch(err => setError(err));
  }

  return (
    <div className="App container">
      <h1 className="title">
        <div className="logo">
          <img 
            src="https://logos-world.net/wp-content/uploads/2021/04/Youtube-Music-Emblem.png"
            alt="youtube music logo"></img>
        </div>
      </h1>

      <div className="cards">
        <TopTenSongs 
          handleTopTen={handleTopTen} 
          topTen={topTen}
          error={error}
        />
        <TopFridaySongs 
          handleTopFriday={handleTopFriday}
          topFriday={topFriday}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;