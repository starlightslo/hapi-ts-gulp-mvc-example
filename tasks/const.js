/*jshint esversion: 6 */

exports.path = {
	ALL_JS: './src/**/*.js',

	// Client
	CLIENT_PUBLIC_DIST: './out/client/public',
	CLIENT_DIST: './out/client',
	JS: './src/client/**/*.js',
	CSS: './src/client/**/*.css',
	IMAGE: './src/client/**/images/*',
	FONT: './src/client/**/fonts/*',
	HTML: './src/client/**/*.html',

	// Server
	SERVER_TS: './src/server/**/*.ts',
	INDEX: './out/server/index.js',
	SERVER_DIST: './out',
	TS_CONFIG: './tsconfig.json'
};

exports.tasks = {
	CLIENT_CSS_DIST: 'client.build_css:dist',
	CLIENT_JS_DIST: 'client.build_js:dist',
	CLIENT_FONT_DIST: 'client.fonts:dist',
	CLIENT_VIEWS_DIST: 'client.views:dist',
	CLIENT_IMAGE_DIST: 'client.imgs:dist',
	SERVER_TS_DIST: 'server.build_ts:dist',
	SERVER: 'server',
	WATCH: 'watch',
	JSHINT: 'jshint',
	BUILD: 'build'
};