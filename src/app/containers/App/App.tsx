import React, { useEffect, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import UserContext from 'app/contexts/UserContext';
import Header from 'app/components/Header';
import userStore from 'app/stores/UserStore';
import Posts from 'posts/routes/Posts';

import css from './App.css';

export default observer(function App() {
  useEffect(() => {
    userStore.fetch().catch(() => {});
  }, []);

  return (
    <div className={css.root}>
      <UserContext.Provider value={userStore.user}>
        <Header className={css.header} />
        <main className={css.main}>
          <div className={css.content}>
            <Suspense fallback={null}>
              <Posts />
            </Suspense>
          </div>
        </main>
      </UserContext.Provider>
    </div>
  );
});
