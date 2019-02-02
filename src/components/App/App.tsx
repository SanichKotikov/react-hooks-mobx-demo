import React, { useContext, useEffect } from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import StoresContext from '../../stores';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import setTheme from '../../helpers/setTheme';
import THEMES from '../../themes';
import styles from './App.module.css';

const App: React.FunctionComponent = observer(() => {
  const stores = useContext(StoresContext);
  const counter = useObservable({ count: 0 });

  useEffect(() => setTheme(THEMES[stores.uiStore.theme]), [stores.uiStore.theme]);

  return (
    <div className={styles.root}>
      <header>
        <h1>react-hooks-mobx-demo</h1>
      </header>
      <main>
        <ThemeSelector
          themes={THEMES}
          onChange={stores.uiStore.switchTheme}
        />
        <div className={styles.counter}>
          <span>Counter: {counter.count}&nbsp;</span>
          <button onClick={() => counter.count++}>+</button>
        </div>
      </main>
    </div>
  );
});

export default App;
