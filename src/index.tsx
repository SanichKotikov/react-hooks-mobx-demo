import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Theme from 'app/providers/Theme';
import App from 'app/containers/App';

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root'),
);
