import { ReactComponent as IconFacebook } from 'assets/facebook.svg';
import { ReactComponent as IconPinterest } from 'assets/pinterest.svg';
import { ReactComponent as IconInstagram } from 'assets/instagram.svg';
import styles from 'styles/Icons.module.scss';

const Icons = () => {
  return (
    <div className={styles.icons}>
      <div className={styles['icons-div']}>
        <IconFacebook className={styles.icon} />
      </div>
      <div className={styles['icons-div']}>
        <IconPinterest className={styles.icon} />
      </div>
      <div className={styles['icons-div']}>
        <IconInstagram className={styles.icon} />
      </div>
    </div>
);
};

export default Icons;
