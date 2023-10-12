import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [team1, setTeam1] = useState({
    score: 0,
    fgm: 0,
    fga: 0,
    threePm: 0,
  });

  const [team2, setTeam2] = useState({
    score: 0,
    fgm: 0,
    fga: 0,
    threePm: 0,
  });

  return (
    <div className="App">
      <div className="shotclock">
        <div className="team1">
          <h1>Team 1</h1>
          <h2 className="score">{team1.score}</h2>
          <h4>
            {team1.fgm}/{team1.fga}
          </h4>
        </div>
        <div className="team2">
          <h1>Team 2</h1>
          <h2 className="score">{team2.score}</h2>
          <h4>
            {team2.fgm}/{team2.fga}
          </h4>
        </div>
      </div>
      <div className="buttons">
        <div className="row">
          <div className="column">
            <button
              id="miss"
              onClick={() =>
                setTeam1((prev) => ({
                  ...prev,
                  fga: prev.fga + 1,
                }))
              }
            >
              Miss
            </button>

            <button
              id="miss"
              onClick={() =>
                setTeam2((prev) => ({
                  ...prev,
                  fga: prev.fga + 1,
                }))
              }
            >
              Miss
            </button>
          </div>

          <div className="column">
            <button
              id="two"
              onClick={() =>
                setTeam1({
                  score: team1.score + 2,
                  fgm: team1.fgm + 1,
                  fga: team1.fga + 1,
                })
              }
            >
              Two
            </button>
            <button
              id="two"
              onClick={() =>
                setTeam2({
                  score: team2.score + 2,
                  fgm: team2.fgm + 1,
                  fga: team2.fga + 1,
                })
              }
            >
              Two
            </button>
          </div>

          <div className="column">
            <button
              id="three"
              onClick={() =>
                setTeam1({
                  score: team1.score + 3,
                  fgm: team1.fgm + 1,
                  fga: team1.fga + 1,
                })
              }
            >
              Three
            </button>
            <button
              id="three"
              onClick={() =>
                setTeam2({
                  score: team2.score + 3,
                  fgm: team2.fgm + 1,
                  fga: team2.fga + 1,
                })
              }
            >
              Three
            </button>
          </div>
        </div>
        <button
          id="reset"
          onClick={() =>
            setTeam1({ score: 0, fgm: 0, fga: 0 }) +
            setTeam2({ score: 0, fgm: 0, fga: 0 })
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}
