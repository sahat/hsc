var request = require('request');

exports.code = function(code, callback) {
	var requestURL = 'http://httpstatus.es/codes/';

	switch (~~code) { // Fastest method of convert a string to an integer, according to: http://jsperf.com/number-vs-parseint-vs-plus/3.
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

		// 4xx: client error.
		case 400:
		case 401:
		case 402:
		case 403:
		case 404:
		case 405:
		case 406:
		case 407:
		case 408:
		case 409:
		case 410:
		case 411:
		case 412:
		case 413:
		case 414:
		case 415:
		case 416:
		case 417:
		case 418:
		case 420:
		case 422:
		case 423:
		case 424:
		case 426:
		case 428:
		case 429:
		case 431:
		case 444:
		case 449:
		case 450:
		case 451:
		case 499:
			requestURL += '4';
			break;

		case 500:
		case 501:
		case 502:
		case 503:
		case 504:
		case 505:
		case 506:
		case 507:
		case 508:
		case 509:
		case 510:
		case 511:
		case 598:
		case 599:
			requestURL += '5';
			break;

		default:
			callback({
				status: 'error',
				error: 'Invalid code ' + code + '.'
			});
			return;
	}

	requestURL += '.json';

	var category;
	request(requestURL, function(error, response, body) {
		if (error) {
			callback({
				status: 'error',
				error: 'Invalid code ' + code + '.'
			});
			return;
		}

		category = JSON.parse(body);
		category.codes[code].status = 'success';

		callback(category.codes[code]);
		return;
	});
};
