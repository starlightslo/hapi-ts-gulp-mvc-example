/// <reference path="../../../../../typings/tsd.d.ts" />
'use strict'

import * as Boom from 'boom'
const Hoek = require('hoek')
const Joi = require('joi')

const internals = {}

exports.register = function(server, options, next) {
	server.auth.scheme('session', internals['implementation'])
	next()
}

exports.register.attributes = {
	pkg: {
		name: 'hapi-auth-local',
		version: '1.0.0'
	}
}

internals['schema'] = Joi.object({
	session: Joi.string().default('sid'),
	ttl: Joi.number().integer().min(0).when('keepAlive', { is: true, then: Joi.required() }),
	domain: Joi.string().allow(null),
	path: Joi.string().default('/'),
	clearInvalid: Joi.boolean().default(false),
	keepAlive: Joi.boolean().default(false),
	isSecure: Joi.boolean().default(true),
	isHttpOnly: Joi.boolean().default(true),
	appendNext: Joi.alternatives(Joi.string(), Joi.boolean()).default(false),
	redirectOnTry: Joi.boolean().default(true),
	validateFunc: Joi.func(),
	requestDecoratorName: Joi.string().default('cookieAuth')
}).required()

internals['implementation'] = function(server, options) {
	const results = Joi.validate(options, internals['schema'])
	Hoek.assert(!results.error, results.error)

	const settings = results.value

	const scheme = {
		authenticate: function(request, reply) {
			const validate = function() {
				// Check session
				const session = request.yar.get(settings.session)
				if (!session) {
					return reply(Boom.unauthorized(null, 'session'))
				}

				if (!settings.validateFunc) {
					if (settings.keepAlive) {
						request.yar.set(settings.session, session)
					}
					return reply.continue({ credentials: session, artifacts: session })
				}

				settings.validateFunc(request, session, (err, isValid, userData) => {
					if (err || !isValid) {
						if (settings.clearInvalid) {
							request.yar.clear(settings.session)
						}
						return reply(Boom.unauthorized('Invalid session'), { credentials: userData || session, artifacts: session })
					}

					if (settings.keepAlive) {
						request.yar.set(settings.session, session)
					}

					return reply.continue({ credentials: userData || session, artifacts: session })
				})
			}
			validate()
		}
	}
	return scheme
}