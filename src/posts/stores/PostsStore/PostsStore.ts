import { observable, runInAction, ObservableMap } from 'mobx';
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

  fetch() {
    return this.status.fetch()
      .then((posts) => {
        runInAction(() => {
          posts.forEach(post => this.posts.set(post.id, post));
        });
      });
  }

}

export default PostsStore;
