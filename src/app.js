import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  var interVal = useRef(null);

  const [timer, setTimer] = useState(0);

  const startTimer = (e) => {
    interVal.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  };

  const stopTimer = (e) => {
    clearInterval(interVal.current);
  };

  const resetTimer = (e) => {
    clearInterval(interVal.current);
    setTimer(0);
  };

  const formatTime = (timerVal) => {
    const getSeconds = `0${timerVal % 60}`.slice(-2);
    const minutes = `${Math.floor(timerVal / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timerVal / 3600)}`.slice(-2);

    return `${getHours || "00"} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <span> {formatTime(timer)} </span>
      <button onClick={startTimer}> start </button>
      <button onClick={stopTimer}> stop </button>
      <button onClick={resetTimer}> reset </button>
    </div>
  );
}
