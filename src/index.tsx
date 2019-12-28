import './index.css';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Theme from 'app/providers/Theme';
import Layout from 'app/components/Layout';
import Posts from 'posts/routes/Posts';

ReactDOM.render(
  <Theme>
    <Layout>
      <Suspense fallback={null}>
        <Posts />
      </Suspense>
    </Layout>
  </Theme>,
  document.getElementById('root'),
);
