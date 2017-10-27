"use strict";

var JsonFile = require('jsonfile');

(function () {
	var _sendMessage = function (message, callback) {
		var send = null;

		send = GetInitialCommunication(message);

		callback(send);
	};

	var GetInitialCommunication = function (message) {
		var initial = JsonFile.readFileSync('./files/Initial.json');

		for (var i = 0; i < initial.length; ++i) {
			var messages = initial[i].messages;
			if (!messages) {
				var error = JsonFile.readFileSync('./files/NotFound.json');
				error.push(message);

				JsonFile.writeFileSync('./files/NotFound.json', error);

				return {
					response: true,
					message: initial[i].response
				};
			}

			for (var j = 0; j < messages.length; ++j) {
				if (message.toUpperCase().indexOf(messages[j]) !== -1) {
					return {
						response: true,
						message: initial[i].response
					};
				}
			}
		}
	};

	var _getResponseAddressCommunication = function (data) {
		var str = '<br />';

		if (!data) {
			return {
				response: true,
				message: "Não encontrei nada relacionado!"
			};
		}
	};

	module.exports.SendMessage = _sendMessage;
	module.exports.GetResponseAddressCommunication = _getResponseAddressCommunication;
})();