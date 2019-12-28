import React from 'react';
import { uiThemeName } from 'app/types';

type IThemeContext = [uiThemeName, (theme: uiThemeName) => void];
export default React.createContext<IThemeContext>([uiThemeName.Light, () => {}]);
