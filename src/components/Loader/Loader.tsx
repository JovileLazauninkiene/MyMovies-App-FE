import styles from './Loader.module.css';

const Loader = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.loaderBackdrop}>
        <div className={styles['loader-ring']}></div>
      </div>
    </div>
  );
};

export default Loader;
