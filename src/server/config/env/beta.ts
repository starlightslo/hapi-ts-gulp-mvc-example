/// <reference path="../../../../typings/tsd.d.ts" />

module.exports = {
	port: process.env.PORT || 8000,
	secret: '0123456789abcdefghijklmnopqustuvwxyz',		// Should more than 32 characters
	logConfig: {
		name: 'Sample MVC',
		env: 'Beta',
		level: 'debug'
	}
}