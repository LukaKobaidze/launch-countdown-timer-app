import { useEffect, useRef, useState } from 'react';
import classes from '../../../styles/Main/Countdown/TimeBox.module.scss';

interface Props {
  unit: string;
  time: number | undefined;
  upcomingTime: number | undefined;
}

const TimeBox = (props: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const timeFrontDisplay = useRef<string>();

  const timeBackDisplay = String(props.upcomingTime).padStart(2, '0');
  useEffect(() => {
    timeFrontDisplay.current = String(props.time).padStart(2, '0');
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      timeFrontDisplay.current = String(props.upcomingTime).padStart(2, '0');
      setIsAnimating(false);
    }, 750);
    return () => clearTimeout(timeout);
  }, [props.upcomingTime]);

  if (props.unit === 'hours') {
    console.log(timeFrontDisplay.current);
  }
  return (
    <div className={classes.box}>
      <div className={classes.top}>
        <div
          className={`${classes['box--half']} ${classes['top--front']} ${
            isAnimating ? classes['top--front--animation'] : ''
          }`}
        >
          <span className={`${classes.number} ${classes['top--front--num']}`}>
            {timeFrontDisplay.current}
          </span>
        </div>
        <div
          className={`${classes['box--half']} ${classes['top--back']}  ${
            isAnimating ? classes['top--back--animation'] : ''
          }`}
        >
          <span className={`${classes.number} ${classes['top--back--num']}`}>
            {timeBackDisplay}
          </span>
        </div>
      </div>
      <div className={classes.under}>
        <div className={`${classes['box--half']} ${classes['under--top']}`}>
          <span className={`${classes.number} ${classes['under--top--num']}`}>
            {timeBackDisplay}
          </span>
        </div>
        <div className={`${classes['box--half']} ${classes['under--bottom']}`}>
          <span
            className={`${classes.number} ${classes['under--bottom--num']}`}
          >
            {timeFrontDisplay.current}
          </span>
        </div>
      </div>
      <span className={classes.unit}>{props.unit}</span>
    </div>
  );
};

export default TimeBox;
