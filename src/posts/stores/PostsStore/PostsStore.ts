import { observable, action, runInAction } from 'mobx';
import fetcher from '../../../app/helpers/fetcher';
import services from './services';
import { uiLoading } from '../../../app/types';

class PostsStore {

  @observable fetching: uiLoading = uiLoading.None;
  @observable posts = observable.map({});

  @action fetch() {
    return fetcher(this, 'fetching', services.fetchPosts())
      .then((posts) => runInAction(() => (
        posts.forEach(post => this.posts.set(post.id, post))
      )));
  }

}

export default PostsStore;
