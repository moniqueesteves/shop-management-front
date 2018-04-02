import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './assets/fonts/fonts.css';
import page from './pages/index';
import produtos from './pages/gridProdutos';

const app = () => (
  <div>
    <Helmet titleTemplate="Titulo do site">
      <title>Titulo do site</title>
      <meta name="description" content="descrição do site" />
      <meta
        name="viewport"
        content={
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, height=device-height'
        }
      />
      <link rel="canonical" href="http://www.homepage.com/" />
    </Helmet>
    <Switch>
      <Route path="/" component={page} exact />
      <Route path="/produtos" component={produtos} />
    </Switch>
  </div>
);

export default app;
