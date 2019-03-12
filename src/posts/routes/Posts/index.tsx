import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "posts" */ './Posts'),
  loading: () => <div>Loading...</div>,
});
