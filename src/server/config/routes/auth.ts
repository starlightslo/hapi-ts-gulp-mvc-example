/// <reference path="../../../../typings/tsd.d.ts" />

exports.register = (server, options, next) => {
	// Router module
	const Router = require('../../app/modules/router')

	/**
	 * Auth controller
	 **/
	const AuthController = require('../../app/controllers/auth')
	server.route((new Router('POST', '/auth/login', AuthController.login, AuthController.loginValidate)).get())
	
	next()
}

exports.register.attributes = {
	name: 'Auth Route',
	version: '1.0.0'
}
