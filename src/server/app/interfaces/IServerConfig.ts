export interface Config {
	port: number,
	root: string,
	path: {
		public: string,
		routes: string,
		plugins: string,
		strategy: string
	},
	env: string,
	session: Session,
	logConfig: Object,
	cache: Object
}

export interface Route {
	method: string|string[],
	path: string,
	handler?: Function
}

export interface Session {
	ttl: number,
	isSecure: boolean,
	isHttpOnly: boolean,
	path: string,
	domain: string,
	encoding: string
}

export interface RouteConfig {
	cache: {
		expiresIn: number,
		privacy: string
	}
}

