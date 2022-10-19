import { useEffect, useState } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import { RouteKey } from 'navigation/routes';
import NavigationLink from 'components/NavigationLink/NavigationLink';

import HamburgerButton from '../HamburgerButton/HamburgerButton';
import useMediaQuery from '../../hooks/useMediaQuery';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.css';

const Header = () => {
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: '(min-width: 768px' });

  useEffect(() => {
    if (matches) {
      setSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className={styles.headerElement}>
      <MyMoviesLogo className={styles.headerIcon} />
      <>
        {!matches ? <HamburgerButton isActive={sideBarVisible} onClick={handleButtonClick} /> : <NavigationLink name="Movies" to={RouteKey.Movies} />}
        {sideBarVisible && (
          <Sidebar onBackDropClick={closeSidebar}>
            <NavigationLink name="Movies" to={RouteKey.Movies} />
          </Sidebar>
        )}
      </>
    </header>
  );
};
export default Header;
