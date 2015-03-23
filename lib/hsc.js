var request = require('request');

exports.code = function(code) {
	var requestURL = 'http://httpstatus.es/codes/';

	switch (code) {
		case 100:
		case 101:
		case 102:
		case 103:
		case 122:
			requestURL += '1.json';
			break;

		default:
			console.log("Invalid code " + code + ".");
			return;
	}

	var codes;
	request(requestURL, function(error, response, body) {
		codes = JSON.parse(body);

		console.log(codes.codes[code]);
	});
};
