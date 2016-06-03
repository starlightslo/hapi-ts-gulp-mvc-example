/*jshint esversion: 6 */

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const config = require('../out/server/config/config');
const Server = require('../out/server/server');

const server = new Server.Server(config);

// To make lab look like BDD:
const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;

describe('API tests', () => {
	before((done) => {
		// Start the server
		server.start()
		.then(() => {
			console.log(config.appName + ' is running on port: ' + config.port);
			done();
		})
		.catch(err => {
			console.error('Start server failed: ' + err);
		});
	});

	it('Index testing', (done) => {
		server.self().inject({
			method: 'GET',
			url: '/'
		}, response => {
			expect(response.statusCode).to.equal(200);
			expect(response.result.code).to.equal(200);
			done();
		});
	});

	after((done) => {
		done();
	});
});
