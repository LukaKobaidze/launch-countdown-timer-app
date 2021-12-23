import IconFacebook from './IconFacebook';
import IconInstagram from './IconInstagram';
import IconPinterest from './IconPinterest';
import classes from '../../../styles/Main/Icons/Icons.module.scss';

const Icons = () => {
  return (
    <div className={classes.icons}>
      <div className={classes['icons-div']}>
        <IconFacebook
          className={`${classes.icon} ${classes['icon--facebook']}`}
        />
        <div />
      </div>
      <div className={classes['icons-div']}>
        <IconPinterest
          className={`${classes.icon} ${classes['icon--pinterest']}`}
        />
        <div />
      </div>
      <div className={classes['icons-div']}>
        <IconInstagram
          className={`${classes.icon} ${classes['icon--instagram']}`}
        />
        <div />
      </div>
    </div>
  );
};

export default Icons;
