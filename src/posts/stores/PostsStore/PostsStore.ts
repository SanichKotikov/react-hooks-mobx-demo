import { action, observable, computed, ObservableMap, runInAction } from 'mobx';
import { IPost } from 'posts/types';
import services from './services';

class PostsStore {
  @observable posts: ObservableMap<number, IPost>;

  constructor() {
    this.posts = observable.map({});
  }

  @computed get empty() {
    return !this.posts.size;
  }

  @action fetch = async () => {
    const posts = await services.fetchPosts();
    runInAction(() => {
      posts.forEach(post => this.posts.set(post.id, post));
    });
  };
}

export default PostsStore;
