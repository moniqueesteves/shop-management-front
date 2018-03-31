const merge = require('lodash/merge');

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiClientUrl: '/api/',
    // apiServerUrl: 'http://localhost:3000/api/',
  },
  test: {},
  development: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    apiServerUrl: 'http://localhost:8080/',
  },
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiClientUrl: '/api/',
    // apiServerUrl: 'http://localhost:8080/api/',
  },
};

module.exports = merge(config.all, config[config.all.env]);
