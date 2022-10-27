import './App.css';
import Timer from './Timer';
import Tabatatimer from './TabataTimer';
import {useState, useEffect} from 'react';



const Tabata = () => {

  const [time, setTime] = useState(0);
  const [number, setNumber] = useState(0);
  const [countdowns, setCountdowns] = useState([]);

  const handleInput = event => {
    const n = parseInt(document.getElementById("numberSets").value);
    const a = parseInt(document.getElementById("activityTime").value);
    const r = parseInt(document.getElementById("restTime").value);
    console.log("in app n ", n);
    console.log("in app a ", a);
    console.log("in app r ", r);
    //setTime(t*60*1000);
    let countdowns = [];
    for (let i = 0; i < 2*n; i++ ) {
      if (i%2 === 0){
        countdowns.push(a*60*1000);
      }
      else {
        countdowns.push(r*60*1000);
      }
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
      <h3 className="first-input">{"Please enter your activity time in minutes for each set\n"}</h3>
      <input id="activityTime" name="activityTime" placeholder="Enter Activity Time" />
      <h3 className="first-input">{"Please enter your rest time in minutes for each set\n"}</h3>
      <input id="restTime" name="restTime" placeholder="Enter Rest Time" />
      <button onClick={handleInput}>Submit</button>
      <Tabatatimer countdowns={countdowns} />
    </div>
  );
}

export default Tabata;
