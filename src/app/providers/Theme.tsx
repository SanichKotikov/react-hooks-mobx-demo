import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import ThemeContext from '../contexts/ThemeContext';
import setTheme from '../helpers/setTheme';
import { uiThemeName } from '../types';

const Theme: React.FunctionComponent = observer(({ children }) => {
  const [theme, updateTheme] = useState(uiThemeName.Light);

  const onUpdateTheme = useCallback((theme: uiThemeName) => {
    updateTheme(theme);
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, onUpdateTheme]}>
      {children}
    </ThemeContext.Provider>
  );
});

export default Theme;
