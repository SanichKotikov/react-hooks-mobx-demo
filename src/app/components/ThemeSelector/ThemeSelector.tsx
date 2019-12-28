import React from 'react';
import classNames from 'classnames';
import { uiThemeName } from 'app/types';

import css from './ThemeSelector.css';

const THEMES = Object.keys(uiThemeName) as ReadonlyArray<keyof typeof uiThemeName>;

interface IProps {
  className?: string;
  onChange: (theme: uiThemeName) => void;
}

export default React.memo<IProps>(
  function ThemeSelector({ className, onChange }) {
    return (
      <div className={classNames(css.root, className)}>
        {THEMES.map((name) => (
          <button
            key={name}
            className={css.button}
            onClick={() => onChange(uiThemeName[name] as uiThemeName)}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
);
