import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore as store } from '../config/store/configure';
import App from './app';

import { basename } from '../config/env.config';

const client = () => (
  <Fragment>
    <Provider store={store()}>
      <HashRouter basename={basename}>
        <App />
      </HashRouter>
    </Provider>
  </Fragment>
);

const root = document.getElementById('root');
render(client(), root);
