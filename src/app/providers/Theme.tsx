import React, { useState, useCallback, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ThemeContext from '../contexts/ThemeContext';
import setTheme from '../helpers/setTheme';
import { uiThemeName } from '../types';

const DEFAULT_THEME =
  matchMedia('(prefers-color-scheme: dark)').matches
    ? uiThemeName.Dark
    : uiThemeName.Light;

const Theme: React.FunctionComponent = observer(({ children }) => {
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

export default Theme;
