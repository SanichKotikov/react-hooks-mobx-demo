import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import 'mobx-react-lite/batchingForReactDom';
import Theme from 'app/providers/Theme';
import App from 'app/containers/App';

configure({ enforceActions: 'observed' });

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root'),
);
