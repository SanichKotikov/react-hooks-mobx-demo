import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './app/providers/Theme';
import CurrentUser from './app/providers/CurrentUser';
import Layout from './app/components/Layout';
import Posts from './posts/routes/Posts';

ReactDOM.render(
  <Theme>
    <CurrentUser>
      <Layout>
        <Posts />
      </Layout>
    </CurrentUser>
  </Theme>,
  document.getElementById('root')
);
