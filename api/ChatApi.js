"use strict";

var Robot = require('../Robot');

(function () {
	var _create = function (message, hash, callback) {
		Robot.SendMessage(
			message,
			CheckCreate.bind(this, hash, callback)
		);
	};

	var CheckCreate = function (hash, callback, send) {
		callback(send);
	};

	module.exports.Create = _create;
})();