import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const quarters = e => {
    if (quarter >= 4) {
      setQuarter(1);
    } else {
      setQuarter(quarter + 1);
    }
  };
  const [down, setDown] = useState(1);
  const downs = e => {
    if (down >= 4) {
      setDown(1);
    } else {
      setDown(down + 1);
    }
  };
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="arrow" onClick={downs}></button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button className="arrow" onClick={quarters}></button>
      </div>
    </div>
  );
};

export default BottomRow;
