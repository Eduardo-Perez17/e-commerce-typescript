import { Outlet } from 'react-router-dom';

import { MenuApp } from '../components/MenuApp';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Box } from '../components/Box';

const Layout = (): JSX.Element => {
  return (
    <Box classStyle='container-app-father'>
      <Box classStyle='container-app'>
        <MenuApp />
        <Box>
          <Header />
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
