import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../Header';
import Content from '../Content';

import css from './Layout.css';

export default observer(
  function Layout({ children }) {
    return (
      <div className={css.root}>
        <Header className={css.header} />
        <main className={css.main}>
          <Content>
            {children}
          </Content>
        </main>
      </div>
    );
  }
);
