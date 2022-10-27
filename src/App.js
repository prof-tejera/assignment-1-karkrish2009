import React from "react";
import './App.css';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Stopwatch from "./components/timers/Stopwatch";
import Countdown from "./components/timers/Countdown";
import XY from "./components/timers/XY";
import Tabata from "./components/timers/Tabata"

//import DocumentationView from "./views/DocumentationView";
//import TimersView from "./views/TimersView";
import {useState} from 'react';

/*
const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Timers</Link>
        </li>
        <li>
          <Link to="/docs">Documentation</Link>
        </li>
      </ul>
    </nav>
  );
};*/
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
