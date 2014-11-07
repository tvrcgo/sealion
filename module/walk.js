
define(function(require, exports, module) {

	var fs = require('fs');

	function traversal(path) {
		var all = fs.readdirSync(path);
		all.forEach(function(item){
			var one = path + '/' + item
			if (fs.statSync(one).isDirectory()) {
				traversal(one);
			}
			else {
				// is file
			}
		});
	}

	exports.go = traversal;

});