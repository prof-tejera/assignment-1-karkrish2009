import React from "react";
import './App.css';
import styled from "styled-components";
import Stopwatch from "./components/timers/Stopwatch";
import Countdown from "./components/timers/Countdown";
import XY from "./components/timers/XY";
import Tabata from "./components/timers/Tabata"

import {useState} from 'react';


const App = () => {

  const [timer, setTimer] = useState("");

  const timerSelect = event => {

    if (event.target.value === "Stopwatch"){
        setTimer("Stopwatch");
        console.log(event.target.value);
    }
    else if (event.target.value === "Countdown"){
        setTimer("Countdown");
        console.log(event.target.value);
    }
    else if (event.target.value === "XY"){
        setTimer("XY");
        console.log(event.target.value);
    }
    else{
      setTimer("Tabata");
      console.log(event.target.value);
    }
  }

  return (
    <div>
    <label for="timer-select">Choose a Timer:</label>

    <select name="timer" id="timer" onChange={timerSelect}>
      <option value="">--Please choose an option--</option>
      <option value="Stopwatch">Stopwatch</option>
      <option value="Countdown">Countdown</option>
      <option value="XY">XY Timer</option>
      <option value="Tabata">Tabata</option>
    </select>
    <div>
    {timer === "Stopwatch" && (
      <Stopwatch />
    )}
    {timer === "Countdown" && (
      <Countdown />
    )}
    {timer === "XY" && (
      <XY />
    )}
    {timer === "Tabata" && (
      <Tabata />
    )
    }
    </div>
    </div>
  );
};

export default App;
