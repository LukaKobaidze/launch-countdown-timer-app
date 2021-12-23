import Heading from '../UI/Heading';
import classes from '../../styles/Main/Main.module.scss';
import Countdown from './Countdown/Countdown';
import Icons from './Icons/Icons';

const Main = () => {
  return (
    <main className={classes.main}>
      <Heading className={classes.heading}>We're launching soon</Heading>
      <Countdown />
      <Icons />
    </main>
  );
};

export default Main;
