/// <reference path="../../../../typings/tsd.d.ts" />

import * as Boom from 'boom'

exports.index = function(request, reply) {
	request.log.info('just a test log');
	reply({ code: 200, result: this.test });
};

exports.login = function(request, reply) {
	reply.file(request.server.config.path.views + '/login.html');
};

exports.logout = function(request, reply) {
	request.yar.clear('token');
	reply.redirect('login');
};

exports.admin = function(request, reply) {
	console.log(request.auth);
	if (request.auth.isAuthenticated) {
		reply(request.auth.credentials);
	} else {
		reply(Boom.unauthorized('Invalid session'));
	}
};

exports.cssFile = {
	directory: {
		path: './css',
		redirectToSlash: true,
		index: true
	}
};

exports.jsFile = {
	directory: {
		path: './js',
		redirectToSlash: true,
		index: true
	}
};

exports.imageFile = {
	directory: {
		path: './images',
		redirectToSlash: true,
		index: true
	}
};

exports.fontFile = {
	directory: {
		path: './fonts',
		redirectToSlash: true,
		index: true
	}
};
