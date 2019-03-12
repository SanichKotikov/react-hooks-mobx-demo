import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { UserStoreContext } from '../stores/UserStore';
import UserContext from '../contexts/UserContext';

const CurrentUser: React.FunctionComponent = observer(({ children }) => {
  const userStore = useContext(UserStoreContext);
  useEffect(() => { userStore.fetch(); }, []);

  return (
    <UserContext.Provider value={userStore.user}>
      {children}
    </UserContext.Provider>
  );
});

export default CurrentUser;
