
import './App.css';
import Watch from '../Watch/Watch';
import React, {useState, useEffect} from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  
  useEffect(()=> {
    const secondsInterval = setInterval(()=>setSeconds((prev)=>prev + 1), 1000)
    if(seconds === 60) {
      setSeconds(0)
      setMinutes((prev)=>prev + 1)
    }
    if(minutes === 60) {
      setMinutes(0)
      setHours((prev)=>prev + 1)
    }
    if(hours === 12 && minutes === 60){
      setHours(1)
    }
    return ()=>clearInterval(secondsInterval)
  })  
  

  const watchTimes = {
    hour: hours,
    minute: minutes,
    second: seconds
  }

  return (
    <Watch watchTimes={watchTimes}/>
  );
}

export default App;
