"use strict";

var ChatRouter = require('./router/ChatRouter');
var Cluster = require('cluster');

(function () {
	var handleMessage = function (worker, message) {
		if (!message.command) {
			return;
		}

		if (message.command === 'SendAddress') {
			ChatRouter.ResponseText(
				message.data.address || message.data.addresses,
				message.data.hash
			);
		}
	};

	var _init = function () {
		Cluster.on('message', handleMessage);
	};

	module.exports.Init = _init;
})();