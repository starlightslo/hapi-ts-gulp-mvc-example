/// <reference path="../../../../typings/tsd.d.ts" />

exports.register = (server, options, next) => {
	// Router module
	const Router = require('../../app/modules/router')

	/**
	 * User controller
	 **/
	const UserController = require('../../app/controllers/user')
	server.route(new Router('GET', '/user', UserController.getUsers).get())
	server.route(new Router('GET', '/user/{id}', UserController.getUser).get())

	next()
}

exports.register.attributes = {
	name: 'User Route',
	version: '1.0.0'
}
