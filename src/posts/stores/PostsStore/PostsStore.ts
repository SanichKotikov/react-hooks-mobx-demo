import { action, observable, ObservableMap, runInAction } from 'mobx';
import StatusStore from 'app/stores/StatusStore';
import { IPost } from 'posts/types';
import services from './services';

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
      .catch((error) => {
        console.log(error);
      })
  );

}

export default PostsStore;
