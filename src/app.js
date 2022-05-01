import "./assest/style.css";
import { useState, useRef } from "react";

export default function App() {
  var interVal = useRef(null);

  const [timer, setTimer] = useState(0);
  const [started, setActive] = useState(false);
  const [stopTime, setStopTimer] = useState(false);
  const [reset, setrResetTimer] = useState(false);

  const startTimer = (e) => {
    interVal.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
    setrResetTimer(false);
    setActive(true);
  };

  const stopTimer = (e) => {
    clearInterval(interVal.current);
    setActive(false);
  };

  const resetTimer = (e) => {
    clearInterval(interVal.current);
    setTimer(0);
    setActive(false);
    setStopTimer(false);
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
      <span> { started && "Timer Started " } </span>
      <span> { stopTime && "Timer Stoped " } </span>
      <span> { reset && "just rest Stoped " } </span>
      <button onClick={startTimer} disabled={started}> start </button>
      <button onClick={stopTimer} disabled={!started}> stop </button>
      <button onClick={resetTimer} disabled={reset}> reset </button>
    </div>
  );
}
