import React from "react";

function TopFridaySongs({ handleTopFriday, topFriday, error }) {
    return (
        <div className="card">
            <h2 className="card-title">
              Friday's After-work Hits
            </h2>
            <p className="card-subtitle">
              Top 10 songs played after 4pm
            </p>
            <button 
              className="btn"
              onClick={handleTopFriday}
            >
              Click Here
            </button>

            { topFriday && 
              <div className="list">
                <ol className="list-items">
                  {topFriday.map((watch) => {
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
    )
}

export default TopFridaySongs;