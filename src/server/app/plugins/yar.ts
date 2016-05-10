/// <reference path="../../../../typings/tsd.d.ts" />

exports.name = 'yar';

exports.options = {
	maxCookieSize: 0,		// force server-side storage
	cookieOptions: {
		password: require('../../config/config').secret,	// cookie password
		isSecure: false										// allow non HTTPS
	}
};