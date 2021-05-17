module.exports = {
	mount: {
		src: '/',
	},

	buildOptions: {
		baseUrl: '/button-component',
		out: './docs',
	},

	optimize: {
		bundle: true,
		minify: true,
		treeshake: true,
		target: 'es2018',
	},
};
