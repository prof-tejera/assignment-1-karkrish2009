import './App.css';
import XYtimer from './XYTimer';
import {useState, useEffect} from 'react';



const XY = () => {

  const [time, setTime] = useState(0);
  const [number, setNumber] = useState(0);
  const [countdowns, setCountdowns] = useState([]);

  const handleInput = event => {
    const n = parseInt(document.getElementById("numberSets").value);
    const t = parseInt(document.getElementById("countdownTime").value);
    console.log("in app n ", n);
    console.log("in app t ", t);
    setTime(t*60*1000);
    let countdowns = [];
    for (let i = 0; i < n; i++ ) {
      countdowns.push(t*60*1000);
      console.log("Here in setting countdowns", countdowns[i], countdowns[0]);
    }

    setNumber(n);
    setCountdowns(countdowns);

    //console.log(countdownTime);
    //console.log("in handleInput", parseInt(event.target.value), typeof(parseInt(event.target.value)));
    //setTime(parseInt(event.target.value)*60*1000);
  };
  const logValue = () => {
    console.log(time);
  };
  return (
    <div className="App">
      <h3 className="number-of-sets">{"Please input number of sets \n"}</h3>
      <input id="numberSets" name="numberSets" placeholder="Enter Number of Sets" />
      <h3 className="first-input">{"Please enter your countdown in minutes for each set\n"}</h3>
      <input id="countdownTime" name="countdownGoal" placeholder="Enter Countdown Value" />
      <button onClick={handleInput}>Submit</button>
      <XYtimer countdowns={countdowns} />
    </div>
  );
}



export default XY;
