import { ReactChild, MouseEvent } from 'react';

import styles from './Sidebar.module.css';

type SidebarProps = { children: ReactChild; onBackDropClick?: () => void };

const Sidebar = ({ children, onBackDropClick }: SidebarProps): JSX.Element => {
  const onSideBarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.takeOverSidebarWrapper} onClick={onBackDropClick}>
      <div className={styles.takeOverSidebar} onClick={onSideBarClick}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;