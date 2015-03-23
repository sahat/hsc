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

		case 200:
		case 201:
		case 202:
		case 203:
		case 204:
		case 205:
		case 206:
		case 207:
		case 208:
		case 226:
			requestURL += '2.json';
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
