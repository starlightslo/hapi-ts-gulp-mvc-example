/// <reference path="../../../../typings/tsd.d.ts" />

import * as Joi from 'joi';

exports.loginValidate = {
	auth: false,
	validate: {
		payload: {
			email: Joi.string().email().required(),
			password: Joi.string().required()
		}
	}
};

exports.login = function(request, reply) {
	console.log(request.payload.email);
	console.log(request.payload.password);

	// Generating token	
	const jwt = require('jsonwebtoken');
	const token = jwt.sign({
		username: request.payload.email
	}, request.server.config.secret);

	// Store token
	request.yar.set('token', token);

	// Redirect
	reply.redirect('./../admin');
};
