import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { IUser } from 'app/types';

interface IProps {
  user: IUser | null;
  className?: string;
}

export default observer<IProps>(
  function CurrentUser({ user, className }) {
    if (!user) return null;
    return <div className={classNames(className)}>{user.name}</div>;
  }
);
