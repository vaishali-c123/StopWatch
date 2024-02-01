import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [isRunning, setIsRunning] =  useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const formatTime = (secs) => {
    const mins = Math.floor(secs/60);
    const remaningSecs = secs % 60;
    return `${mins} : ${remaningSecs < 10 ? "0" : ""}${remaningSecs}`
  };

  const toggleTime = () => {
    setIsRunning((prevIsRunning ) => !prevIsRunning)


  };
  const reset =() => {
    setIsRunning(false);
    setElapsedTime(0);
  }

  useEffect(() => {
    
    let intervalId;
   
    if (isRunning)
    {
      intervalId = setInterval(() =>{
        setElapsedTime((prevElaspsedTime) => prevElaspsedTime + 1);
      }, 1000);
    }else{
      clearInterval(intervalId);
    }
    return() => {
      clearInterval(intervalId);
    
    };
  },[isRunning]);

  return (
    <div>
      <h1>StopWatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick = {toggleTime}>{isRunning ?  "Stop" :"Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}


