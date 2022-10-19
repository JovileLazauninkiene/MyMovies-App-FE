import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './HamburgerButton.module.css';

type HamburgerButtonProps = { isActive: boolean; onClick?: () => void };

const HamburgerButton = ({ isActive, onClick }: HamburgerButtonProps): JSX.Element => {
  return (
    <>
      <div className={isActive ? parseMultipleClassNames([styles.container, styles.active]) : styles.container} onClick={onClick}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </>
  );
};

export default HamburgerButton;