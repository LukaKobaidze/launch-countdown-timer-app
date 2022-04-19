import { useState, useEffect } from 'react';
import CountdownBox from './CountdownBox';
import styles from 'styles/Countdown.module.scss';

const convertTime = (milliseconds: number) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(milliseconds / day);
  const hours = Math.floor((milliseconds % day) / hour);
  const minutes = Math.floor((milliseconds % hour) / minute);
  const seconds = Math.floor((milliseconds % minute) / second);

  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [totalMilliseconds, setTotalMilliseconds] = useState(14 * 86400 * 1000);

  useEffect(() => {
    const interval = setInterval(
      () => setTotalMilliseconds((prevState) => prevState - 1000),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = convertTime(totalMilliseconds);
  const {
    days: upcomingDays,
    hours: upcomingHours,
    minutes: upcomingMinutes,
    seconds: upcomingSeconds,
  } = convertTime(totalMilliseconds - 1000);

  return (
    <div className={styles.container}>
      <CountdownBox unit="days" time={days} upcomingTime={upcomingDays} />
      <CountdownBox unit="hours" time={hours} upcomingTime={upcomingHours} />
      <CountdownBox
        unit="minutes"
        time={minutes}
        upcomingTime={upcomingMinutes}
      />
      <CountdownBox
        unit="seconds"
        time={seconds}
        upcomingTime={upcomingSeconds}
      />
    </div>
  );
};

export default Countdown;
