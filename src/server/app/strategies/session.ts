/// <reference path="../../../../typings/tsd.d.ts" />

exports.plugin = 'hapi-auth-local';
exports.isDefault = false;
exports.name = 'local';
exports.scheme = 'session';
exports.mode = false;
exports.options = {
	session: 'token',
	validateFunc: function(request, session, callback) {
		const jwt = require('jsonwebtoken');

		// Get token
		const token = request.yar.get('token');
		if (!token) {
			return callback(null, false);
		}

		// Verify the token
		jwt.verify(token, request.server.config.secret, (err, userData) => {
			if (err) {
				return callback(err, false);
			}

			if (userData) {
				return callback(null, true, userData);
			}

			return callback(null, false);
		});
	}
};