var hsc = require('../lib/hsc.js');

hsc.code(200, function(information) {
	console.log(information.status);
});
