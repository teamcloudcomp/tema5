var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'tema5'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://teamcloudcomp:t34mcl0udc0mp@ds032319.mlab.com:32319/tcc'
  },

  test: {
    root: rootPath,
    app: {
      name: 'tema5'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://teamcloudcomp:t34mcl0udc0mp@ds032319.mlab.com:32319/tcc'
  },

  production: {
    root: rootPath,
    app: {
      name: 'tema5'
    },
    port: process.env.PORT,
    db: 'mongodb://teamcloudcomp:t34mcl0udc0mp@ds032319.mlab.com:32319/tcc'
  }
};

module.exports = config[env];
