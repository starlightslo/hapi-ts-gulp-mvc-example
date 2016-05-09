'use strict'

const chai = require('chai')
const assert = chai.assert

const config = require('../out/server/config/config')
const Server = require('../out/server/server')

const server = new Server(config)

describe('API tests', () => {
	it('Start server', (done) => {
		// Start the server
		server.start()
		.then(() => {
			console.log(config.appName + ' is running on port: ' + config.port)
			done()
		})
		.catch(err => {
			console.error('Start server failed: ' + err)
		})
	})

	it('Index testing', (done) => {
		server.self().inject({
			method: 'GET',
			url: '/'
		}, response => {
			assert.equal(response.statusCode, 200)
			assert.equal(response.result.code, 200)
			done()
		})
	})

	after((done) => {
		done()
	})
})