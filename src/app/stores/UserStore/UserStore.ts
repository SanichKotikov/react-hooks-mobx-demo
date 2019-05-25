import { observable, action, runInAction } from 'mobx';
import fetcher from '../../helpers/fetcher';
import services from './services';
import { uiLoading, IUser } from '../../types';

class UserStore {

  @observable fetching: uiLoading = uiLoading.None;
  @observable user: IUser | null = null;

  @action fetch() {
    return fetcher(this, 'fetching', services.fetchUser())
      .then((user) => {
        runInAction(() => this.user = user);
      });
  }

}

export default UserStore;
