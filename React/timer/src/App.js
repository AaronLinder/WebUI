import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [displayTime, setDisplayTime] = useState('');
  let countdown;

  const startCountdown = () => {
    if (!countdownSeconds || countdownSeconds <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    const endTime = Date.now() + countdownSeconds * 1000;

    countdown = setInterval(() => {
      const remainingTime = Math.round((endTime - Date.now()) / 1000);
      if (remainingTime < 0) {
        clearInterval(countdown);
        setDisplayTime("Time's up!");
      } else {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        setDisplayTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(countdown);
    };
  }, [countdown]);

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <input type="number" value={countdownSeconds} onChange={(e) => setCountdownSeconds(parseInt(e.target.value))} placeholder="Enter time in seconds" />
      <button onClick={startCountdown}>Start Countdown</button>
      <div id="timer">{displayTime}</div>
    </div>
  );
}

export default App;