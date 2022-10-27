import './CountdownTimer.css';
import {useState, useEffect} from 'react';
import Timer from './Timer';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}

  /*
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

const XYtimer = ({countdowns}) => {

  console.log("Checking value", countdowns.length);

/*
  function updateRemainingTime(countdownGoal){
    setRemainingTime(getRemaingTime(countdownGoal));
  }
*/
  console.log("in XYTimer", countdowns[0], countdowns[1]);
  return (
    <div>
    {countdowns.map((countdownGoal, key) => {
      return (
        <div key={key}>
          <Timer countdownGoal={countdownGoal}/>
        </div>
      );
    })};
    </div>
  );
}

export default XYtimer;
