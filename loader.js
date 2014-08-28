

seajs.config({
	// base: "http://localhost/seajs/",
	paths: {
		'cdn': 'http://cdn.staticfile.org'
	},
	alias: {
		"jquery-cmd": "base/jquery/2.1.1/jquery-cmd.min.js",
		"jquery": "base/jquery/2.1.1/jquery.min.js",
		'seajs-css': 'base/seajs-css/seajs-css'
	},
	map: [
		function(uri){
			// if (/(app)\/(.*)/g.test(uri)) {
			// 	uri = uri.replace(/(\.js)$/g, '');
			// 	uri = uri.replace(/(.*)\/(.*)$/g, "$1/$2/main.js");
			// 	return uri;
			// }

			// debug
			if (/(app|module)\/(.*)/g.test(uri)) {
				uri = uri.replace(/(.*)\/(.*\.js)$/g, "$1/src/$2");
			}

			return uri;
		}
	],
	charset: 'utf-8',
	debug: true
});