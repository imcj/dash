import React, { useEffect, useState } from "react";

import tick from './tick.mp3';
import "./Clock.css";

const Clock = () => {
  
  const [hours, setHours] = useState<string>('00');
  const [minutes, setMinutes] = useState<string>('00');
  const [seconds, setSeconds] = useState<string>('00');

  const ledZero = (n: number): string => {
    return n < 10 ? `0${n}` : `${n}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setHours(ledZero(now.getHours()));
      setMinutes(ledZero(now.getMinutes()));
      setSeconds(ledZero(now.getSeconds()));
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className="clock">
      <audio autoPlay={true} controls>
        <source src={tick} type="audio/mp3" />
      </audio>
      <div className="hour">{hours}</div>
      <div className="minute">{minutes}</div>
      <div className="second">{seconds}</div>
    </div>
  );
};

export default Clock;