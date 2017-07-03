require.config({
	baseUrl: "/",
	paths: {
		jquery: "lib/jquery.min",
		vue:"lib/vue.min",
		vueRouter: "lib/vue-router",
		lodash: "lib/lodash",
        text:'./lib/text',
		// elementui: "assets/js/element-ui",
		router: 'routes/router'
	},
	// shim:{
	// 	"elementui": {
	// 		deps: ["vue"],
	// 		exports: "elementui"
	// 	}
	// },
	map: {
		'*': {
			'css': './lib/css'
		}
	}
});

require(["main.js"]);