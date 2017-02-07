var Promise = require('bluebird');

module.exports = function(sails) {

    var install = require('./lib/install.js');
		var initialize = require('./lib/initialize.js');

    return {
      install: install,
			initialize: initialize
    };
};
