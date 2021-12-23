import { useState, useEffect } from 'react';
import TimeBox from './TimeBox';
import classes from '../../../styles/Main/Countdown/Countdown.module.scss';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const convertTime = (
  unit: string,
  milliseconds: number
): number | undefined => {
  let result: number | undefined = undefined;
  if (unit === 'day') {
    result = Math.floor(milliseconds / day);
  }
  if (unit === 'hour') {
    result = Math.floor((milliseconds % day) / hour);
  }
  if (unit === 'minute') {
    result = Math.floor((milliseconds % hour) / minute);
  }
  if (unit === 'second') {
    result = Math.floor((milliseconds % minute) / second);
  }

  return result;
};

const Countdown = () => {
  const [totalMilliseconds, setTotalMilliseconds] = useState(14 * 86400 * 1000);

  const updateCountdown = () => {
    setTotalMilliseconds(prevSeconds => {
      return (prevSeconds -= 1000);
    });
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = convertTime('day', totalMilliseconds);
  const upcomingDays = convertTime('day', totalMilliseconds - 1000);
  const hours = convertTime('hour', totalMilliseconds);
  const upcomingHours = convertTime('hour', totalMilliseconds - 1000);
  const minutes = convertTime('minute', totalMilliseconds);
  const upcomingMinutes = convertTime('minute', totalMilliseconds - 1000);
  const seconds = convertTime('second', totalMilliseconds);
  const upcomingSeconds = convertTime('second', totalMilliseconds - 1000);

  return (
    <div className={classes.container}>
      <TimeBox unit="days" time={days} upcomingTime={upcomingDays} />
      <TimeBox unit="hours" time={hours} upcomingTime={upcomingHours} />
      <TimeBox unit="minutes" time={minutes} upcomingTime={upcomingMinutes} />
      <TimeBox unit="seconds" time={seconds} upcomingTime={upcomingSeconds} />
    </div>
  );
};

export default Countdown;
