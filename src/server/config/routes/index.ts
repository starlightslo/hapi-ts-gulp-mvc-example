/// <reference path="../../../../typings/tsd.d.ts" />

exports.register = (server, options, next) => {
	// Router module
	const Router = require('../../app/modules/router');

	// Binder
	server.bind({
		test: 'Hello Route Plugin'
	});

	/**
	 * Index controller
	 **/
	const IndexController = require('../../app/controllers/index');
	server.route((new Router('GET', '/', IndexController.index)).get());
	server.route((new Router('GET', '/login', IndexController.login)).get());
	server.route((new Router('GET', '/logout', IndexController.logout)).get());
	server.route((new Router('GET', '/admin', IndexController.admin, { auth: 'local' })).get());

	// Handle static files
	server.route((new Router('GET', '/css/{filename}', IndexController.cssFile)).get());
	server.route((new Router('GET', '/js/{filename}', IndexController.jsFile)).get());
	server.route((new Router('GET', '/fonts/{filename}', IndexController.fontFile)).get());
	server.route((new Router('GET', '/images/{filename}', IndexController.imageFile)).get());

	next();
};

exports.register.attributes = {
	name: 'Index Route',
	version: '1.0.0'
};
