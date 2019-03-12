import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { IUser } from '../../types';

interface Props {
  user: IUser | null;
  className?: string;
}

const CurrentUser: React.FunctionComponent<Props> = observer(({ user, className }) => {
  if (!user) return null;
  return <div className={classNames(className)}>{user.name}</div>;
});

export default CurrentUser;
