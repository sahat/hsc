var request = require('request');

exports.code = function(code) {
	var requestURL = 'http://httpstatus.es/codes/';

	switch (code) {
		// 1xx: informational.
		case 100:
		case 101:
		case 102:
		case 103:
		case 122:
			requestURL += '1';
			break;

		// 2xx: success.
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
			requestURL += '2';
			break;

		// 3xx: redirection.
		case 300:
		case 301:
		case 302:
		case 303:
		case 304:
		case 305:
		case 306:
		case 307:
		case 308:
			requestURL += '3';
			break;

		default:
			console.log("Invalid code " + code + ".");
			return;
	}

	requestURL += '.json';

	var category;
	request(requestURL, function(error, response, body) {
		category = JSON.parse(body);

		console.log(category.codes[code]);
	});
};
