import { action, observable, ObservableMap, runInAction } from 'mobx';
import StatusStore from '../../../app/stores/StatusStore';
import services from './services';
import { IPost } from '../../types';

class PostsStore {

  status: StatusStore<IPost[]>;
  @observable posts: ObservableMap<number, IPost>;

  constructor() {
    this.status = new StatusStore(services.fetchPosts);
    this.posts = observable.map({});
  }

  @action fetch = () => (
    this.status.fetch()
      .then(([posts, callback]) => runInAction(() => {
        posts.forEach(post => this.posts.set(post.id, post));
        callback();
      }))
  );

}

export default PostsStore;
