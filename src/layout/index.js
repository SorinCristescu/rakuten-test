import React from 'react';

import Header from '../components/Header';

// Styles
import { Main } from './style';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
