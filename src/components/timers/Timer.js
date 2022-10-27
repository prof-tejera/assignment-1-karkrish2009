import './CountdownTimer.css';
import {useState, useEffect} from 'react';

  /*
const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}


function getRemaingTime(countdownGoal) {

  //console.log("countdown value", countdownGoal);

  //const currentTime = new Date().getTime();
  //alert(currentTime);
  //const goalDay = new Date();
  //const countdownTime = goalDay.setTime(currentTime + (countdownGoal*60*1000));
  //console.log(countdownTime);

  //const distance = countdownGoal - currentTime;
  //const distanceDays = Math.floor(distance / (24*60*60*1000));
  //const distanceHours = Math.floor((distance % (24* 60*60*1000)) / (1000*60*60));
  //const distanceMinutes = Math.floor((distance % (60*60*1000)) / (1000*60));
  //const distanceSeconds = ;

  if (distance < 0){
    return {
      seconds: "01",
      minutes: "01",
      hours: "01",
      days: "01"
    }
  }
  else {
    return {
      seconds: distanceSeconds,
      minutes: distanceMinutes,
      hours: distanceHours,
      days: distanceDays
    }
  }
}*/

const Timer = ({countdownGoal}) => {

  console.log("Checking value", countdownGoal);

  const [remainingTime, setRemainingTime] = useState(countdownGoal);
  const [timerOn, setTimerOn] = useState(false);
//  const [firstTime, setFirstTime] = useState(true);


  useEffect(() => {
    let interval = null;
    console.log(remainingTime);

    if (timerOn && remainingTime > 0){

      interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 10);
      }, 10);
    }
    else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, remainingTime])
/*
  function updateRemainingTime(countdownGoal){
    setRemainingTime(getRemaingTime(countdownGoal));
  }
*/

  return(

  <div>
    <h3 class="timer-header">{"Welcome to the timer"}</h3>
       <button onClick={() => {setRemainingTime(countdownGoal); setFirstTime(false);}}>Set</button>
   <div class="countdown-timer">

    <div class="time">
     <h2 id="minutes">{("0" + Math.floor((remainingTime/60000) % 60)).slice(-2)} :</h2>
    </div>
    <div class="time">
     <h2 id="seconds">{("0" + Math.floor((remainingTime/1000) % 60)).slice(-2)} :</h2>
    </div>
    <div class="time">
     <h2 id="hundreth">{("0" + ((remainingTime/10) % 100)).slice(-2)}</h2>
    </div>
   </div>


    <div class="buttons">
     {!timerOn && remainingTime === countdownGoal && (
       <button onClick={() => setTimerOn(true)}>Start</button>
     )}
     {timerOn && (
       <button onClick={() => setTimerOn(false)}>Stop</button>
     )}
     {!timerOn && remainingTime !== countdownGoal && (
       <button onClick={() => setTimerOn(true)}>Resume</button>
     )}
     {!timerOn && remainingTime < countdownGoal && (
       <button onClick={() => {setTimerOn(false); setRemainingTime(countdownGoal);}}>Reset</button>
     )}
    </div>
  </div>
  );
}

export default Timer;
