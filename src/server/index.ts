/// <reference path="./../../typings/tsd.d.ts" />

const config = require('./config/config')
const Server = require('./server')

const server = new Server(config)

// Start the server
server.start()
.then(() => {
	console.log(config.appName + ' is running on port: ' + config.port)
})
.catch(err => {
	console.error('Start server failed: ' + err)
})
