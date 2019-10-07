//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);
  const homeTeam = "Seattle Seahawks";
  const awayTeam = "Baltimore Ravens";

  const [seconds, setSeconds] = useState(10);
  //const [minutes, setMinutes] = useState(15);

  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  // function reset() {
  //   setSeconds(0);
  //   // setMinutes(15);
  //   setIsActive(false);
  // }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        // if (!isActive && seconds === 0) {
        //   setSeconds(seconds => 10);
        // }
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{scoreHome}</div>
          </div>
          <div className="timer">
            15:{seconds}
            <button
              className={`button button-primary button-primary-${
                isActive ? "active" : "inactive"
              }`}
              onClick={toggle}
            >
              {isActive ? "Pause" : "Start"}
            </button>
            {/* <button className="arrow" onClick={reset}>
              Start
            </button> */}
          </div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{scoreAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setScoreHome(scoreHome + 6)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setScoreHome(scoreHome + 1)}
          >
            Home PAT
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setScoreHome(scoreHome + 3)}
          >
            Home Field Goal
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setScoreHome(0)}
          >
            Reset Score Home
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setScoreAway(scoreAway + 6)}
          >
            Away Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setScoreAway(scoreAway + 1)}
          >
            Away PAT
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setScoreAway(scoreAway + 3)}
          >
            Away Field Goal
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setScoreAway(0)}
          >
            Reset Score Away
          </button>
        </div>
      </section>
    </div>
  );
}
export default App;
//export default Timer;
