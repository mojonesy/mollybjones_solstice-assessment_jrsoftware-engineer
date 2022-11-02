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
                {topTen.map((watch) => {
                  return (
                    <ul className="list-items" key={watch.song}>
                      <li className="item">
                        <span>{watch.song} </span> by <span>{watch.artist}</span> was played <span>{watch.count} </span> times
                      </li>
                    </ul>
                    );
                })}
              </div>
            }
            { error && <p>An error occurred...</p> }
        </div>
    );
}

export default TopTenSongs;