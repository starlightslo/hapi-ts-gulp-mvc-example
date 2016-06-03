/// <reference path="../../../../typings/tsd.d.ts" />

// Router module
import { Router } from '../../app/modules/router';

exports.register = (server, options, next) => {
	/**
	 * Auth controller
	 **/
	const AuthController = require('../../app/controllers/auth');
	server.route((new Router('POST', '/auth/login', AuthController.login, AuthController.loginValidate)).get());

	next();
};

exports.register.attributes = {
	name: 'Auth Route',
	version: '1.0.0'
};