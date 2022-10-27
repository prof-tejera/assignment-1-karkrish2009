import './App.css';
import Timer from './Timer';
import {useState} from 'react';

const Countdown = () => {
  const [time, setTime] = useState(0);

  const handleInput = event => {
    console.log("in handleInput", parseInt(event.target.value), typeof(parseInt(event.target.value)));
    setTime(parseInt(event.target.value)*60*1000);
  };
  return (
    <div className="App">

      <h3 className="first-input">{"Please enter your countdown in minutes \n"}</h3>
      <input onChange={handleInput} placeholder="Enter Countdown Value" />
      <text>{"\n"}</text>
      <Timer countdownGoal={time}/>

    </div>
  );
}

export default Countdown;
