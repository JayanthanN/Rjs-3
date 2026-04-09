import React, { useState, useEffect } from "react";
import "./Stopwatchtimer.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // cleanup
  }, [isRunning]);

  // Format time (HH:MM:SS)
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  return (
    <div className="container">
        <div className="card">
      <h1>STOPWATCH ⏱</h1>

      <div className="time">{formatTime()}</div>

      <div className="buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
