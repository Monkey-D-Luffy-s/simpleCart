import React, { useState, useRef } from "react";
import Model from "./Model";

function Challenges({ title, targetTime }) {
  const timer = useRef();
  const diaref = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    diaref.current.open();
  }

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    diaref.current.open();
    clearTimeout(timer.current);
  }

  return (
    <>
      <Model ref={diaref} targetTime={1} result={"Lost"} />
      <section className="bg-zinc-900 mt-10 mx-10 px-2 py-5 rounded-md">
        <h2 className="font-game text-orange-800 py-2">{title}</h2>
        {timerIsActive && <p>You Lost!</p>}
        <p className="py-3 text-zinc-400">
          {targetTime} seconds{targetTime > 1 ? "s" : ""}
        </p>
        <p className="py-3">
          <button
            className="px-4 py-1 text-zinc-400 bg-zinc-800 outline-none hover:bg-zinc-900 hover:text-orange-700"
            onClick={timerIsActive ? handleStop : handleStart}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="py-3 text-zinc-400">
          Time is Running... / Timer inactive
        </p>
      </section>
    </>
  );
}

export default Challenges;
