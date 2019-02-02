import React from 'react';
import { IUiThemes, ThemeName } from '../../types';
import styles from './ThemeSelector.module.css';

interface IProps {
  themes: IUiThemes;
  onChange: (theme: ThemeName) => void;
}

const ThemeSelector: React.FunctionComponent<IProps> = ({ themes, onChange }) => (
  <div className={styles.root}>
    {(Object.keys(themes) as ThemeName[]).map(theme => (
      <button
        key={theme}
        className={styles.button}
        onClick={() => onChange(theme)}
      >
        {theme}
      </button>
    ))}
  </div>
);

export default ThemeSelector;
