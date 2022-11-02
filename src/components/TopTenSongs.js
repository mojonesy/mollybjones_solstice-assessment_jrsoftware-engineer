import React from "react";

function TopTenSongs({ handleTopTen, topTen, error }) {
    return (
        <div className="card">
            <h2 className="card-title">
              Top 10 Most Played
            </h2>
            <p className="card-subtitle">
              All-time
            </p>
            <button 
              className="btn"
              onClick={handleTopTen}
            >
              Click Here
            </button>

            { topTen && 
              <div className="list">
                <ol className="list-items">
                  {topTen.map((watch) => {
                    return (
                      <li className="item" key={Math.random()}>
                        <span>{watch.song} </span> by <span>{watch.artist}</span> was played <span>{watch.count} </span> times
                      </li>
                    );
                  })}
                </ol>
              </div>
            }
            { error && <p>An error occurred...</p> }
        </div>
    );
}

export default TopTenSongs;