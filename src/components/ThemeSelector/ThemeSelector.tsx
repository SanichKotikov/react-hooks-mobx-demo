import React from 'react';
import classNames from 'classnames';
import { uiThemeName } from '../../types';
import styles from './ThemeSelector.module.css';

const THEMES = Object.keys(uiThemeName);

interface IProps {
  className?: string;
  onChange: (theme: uiThemeName) => void;
}

const ThemeSelector: React.FunctionComponent<IProps> = ({ className, onChange }) => (
  <div className={classNames(styles.root, className)}>
    {THEMES.map((name: any) => (
      <button
        key={name}
        className={styles.button}
        onClick={() => onChange(uiThemeName[name] as uiThemeName)}
      >
        {name}
      </button>
    ))}
  </div>
);

export default ThemeSelector;
