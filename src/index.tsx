import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './app/providers/Theme';
import Layout from './app/components/Layout';
import Posts from './posts/routes/Posts';

ReactDOM.render(
  <Theme>
    <Layout>
      <Posts />
    </Layout>
  </Theme>,
  document.getElementById('root')
);
