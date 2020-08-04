import { observable, ObservableMap, makeAutoObservable, runInAction } from 'mobx';
import { IPost } from 'posts/types';
import services from './services';

class PostsStore {
  posts: ObservableMap<number, IPost> = observable.map({});

  constructor() {
    makeAutoObservable(this);
  }

  get empty() {
    return !this.posts.size;
  }

  fetch = async () => {
    const posts = await services.fetchPosts();
    runInAction(() => {
      posts.forEach(post => this.posts.set(post.id, post));
    });
  };
}

export default PostsStore;
