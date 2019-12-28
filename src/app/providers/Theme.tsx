import React, { useState, useCallback, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ThemeContext from 'app/contexts/ThemeContext';
import setTheme from 'app/helpers/setTheme';
import { uiThemeName } from 'app/types';

const DEFAULT_THEME =
  matchMedia('(prefers-color-scheme: dark)').matches
    ? uiThemeName.Dark
    : uiThemeName.Light;

export default observer(function Theme({ children }) {
  const [theme, updateTheme] = useState(DEFAULT_THEME);

  const onUpdateTheme = useCallback((theme: uiThemeName) => {
    updateTheme(theme);
  }, []);

  useLayoutEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, onUpdateTheme]}>
      {children}
    </ThemeContext.Provider>
  );
});
