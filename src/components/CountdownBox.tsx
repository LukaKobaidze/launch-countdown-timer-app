import { useEffect, useState } from 'react';
import styles from 'styles/CountdownBox.module.scss';

const addZero = (number: number | undefined): string => {
  return String(number).padStart(2, '0');
};

interface Props {
  unit: string;
  time: number | undefined;
  upcomingTime: number | undefined;
}

const CountdownBox = ({ unit, time, upcomingTime }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeFrontDisplay, setTimeFrontDisplay] = useState<string>();

  const timeBackDisplay = addZero(upcomingTime);

  useEffect(() => {
    if (time === upcomingTime) return;

    setTimeFrontDisplay(addZero(time));
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setTimeFrontDisplay(addZero(upcomingTime));
      setIsAnimating(false);
    }, 750);
    return () => clearTimeout(timeout);
  }, [time, upcomingTime]);

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div
          className={`${styles['box--half']} ${styles['top--front']} ${
            isAnimating ? styles['top--front--animation'] : ''
          }`}
        >
          <span className={`${styles.number} ${styles['top--front--num']}`}>
            {timeFrontDisplay}
          </span>
        </div>
        <div
          className={`${styles['box--half']} ${styles['top--back']}  ${
            isAnimating ? styles['top--back--animation'] : ''
          }`}
        >
          <span className={`${styles.number} ${styles['top--back--num']}`}>
            {timeBackDisplay}
          </span>
        </div>
      </div>
      <div className={styles.under}>
        <div className={`${styles['box--half']} ${styles['under--top']}`}>
          <span className={`${styles.number} ${styles['under--top--num']}`}>
            {timeBackDisplay}
          </span>
        </div>
        <div className={`${styles['box--half']} ${styles['under--bottom']}`}>
          <span className={`${styles.number} ${styles['under--bottom--num']}`}>
            {timeFrontDisplay}
          </span>
        </div>
      </div>
      <span className={styles.unit}>{unit}</span>
    </div>
  );
};

export default CountdownBox;
