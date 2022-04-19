import Heading from 'components/Heading';
import Countdown from 'components/Countdown';
import Icons from 'components/Icons';
import Background from 'components/Background';
import styles from 'styles/App.module.scss';

const App = () => {
  return (
    <>
      <header className={styles.header}>
        <Heading level={1} className={styles.heading}>
          We're launching soon
        </Heading>
      </header>
      <main className={styles.main}>
        <Countdown />
      </main>
      <footer className={styles.footer}>
        <Icons />
      </footer>
      <Background />
    </>
  );
};

export default App;
