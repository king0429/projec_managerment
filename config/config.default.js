'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541643570710_6430';

  // add your config here
  config.middleware = [];
  // add datebase
	config.mongoose = {
	  client: {
	    url: 'mongodb://127.0.0.1/project_managerment',
	    options: {}
	  }
	};

  return config;
};
