import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import ThemeContext from 'app/contexts/ThemeContext';
import useUser from 'app/hooks/useUser';
import Content from '../Content';
import CurrentUser from '../CurrentUser';
import ThemeSelector from '../ThemeSelector';

import css from './Header.css';

interface IProps {
  className?: string;
}

export default observer<IProps>(
  function Header({ className }) {
    const { user } = useUser();
    const [, onUpdateTheme] = useContext(ThemeContext);

    return (
      <header className={classNames(css.root, className)}>
        <Content className={css.content}>
          <div className={css.title}>Demo</div>
          <div className={css.side}>
            <CurrentUser className={css.user} user={user} />
            <ThemeSelector onChange={onUpdateTheme} />
          </div>
        </Content>
      </header>
    );
  }
);
