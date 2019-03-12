import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import Content from '../Content';
import CurrentUser from '../CurrentUser';
import ThemeSelector from '../ThemeSelector';
import UserContext from '../../contexts/UserContext';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Header.module.css';

interface Props {
  className?: string;
}

const Header: React.FunctionComponent<Props> = observer(({ className }) => {
  const user = useContext(UserContext);
  const [, onUpdateTheme] = useContext(ThemeContext);

  return (
    <header className={classNames(styles.root, className)}>
      <Content className={styles.content}>
        <div className={styles.title}>Demo</div>
        <div className={styles.side}>
          <CurrentUser className={styles.user} user={user} />
          <ThemeSelector onChange={onUpdateTheme} />
        </div>
      </Content>
    </header>
  );
});

export default Header;
