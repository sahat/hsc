`hsc`
=====
[![Build Status](https://travis-ci.org/qw3rtman/hsc.svg?branch=master)](https://travis-ci.org/qw3rtman/gg)&nbsp;
![](https://img.shields.io/npm/dm/hsc.svg)&nbsp;
![npm version](http://img.shields.io/npm/v/hsc.svg)&nbsp;
[![npm version](https://badge.fury.io/js/hsc.svg)](http://badge.fury.io/js/hsc)&nbsp;
![](https://img.shields.io/npm/l/hsc.svg)&nbsp;  
[![NPM](https://nodei.co/npm/hsc.png?mini=true)](https://nodei.co/npm/hsc/)

## Comprehensive HTTP Status Code Information in Node.js Made Easy!

```js
var hsc = require('hsc');

hsc.code(404, function(information) {
  console.log(information.summary);
});
```

```
requested resource could not be found
```

`hsc` is an npm package that aims to simplify the retrieval of HTTP status code information. `hsc` relies on the wonderful [httpstatus.es](http://httpstatus.es/) [API](https://github.com/citricsquid/httpstatus.es).

Practical uses of `hsc` include:
* Translating HTTP status codes into something users can understand.

`hsc` is simple to install and even more simple to use.

## Installation
`hsc` is an npm module, so simply run:

```bash
npm install hsc
```

or, if you want to add `hsc` as a dependency to your `package.json` file, run:

```bash
npm install hsc --save
```

## Usage
### Standard report with bare-bones information.
```js
hsc.code(200, function(information) {
  console.log(information);
});
```

```json
{
  "code": "200",
  "title": "OK",
  "summary": "standard response for successful HTTP requests",
  "status": "success"
}
```

### Report with descriptions, but no references.
```js
hsc.code(200, function(information) {
  console.log(information);
}, true);

hsc.code(200, function(information) {
  console.log(information);
}, true, false);
```

```json
{
  "code": "200",
  "title": "OK",
  "summary": "standard response for successful HTTP requests",
  "descriptions": {
    "wikipedia": {
      "body": "Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request the response will contain an entity describing or containing the result of the action.",
      "link": "http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#200"
    },
    "ietf": {
      "body": "The request has succeeded. The information returned with the response is dependent on the method used in the request, for example: GET an entity corresponding to the requested resource is sent in the response; HEAD the entity-header fields corresponding to the requested resource are sent in the response without any message-body; POST an entity describing or containing the result of the action;",
      "link": "http://www.ietf.org/rfc/rfc2616.txt"
    }
  },
  "status": "success"
}
```

### Report with references, but no descriptions.
```js
hsc.code(200, function(information) {
  console.log(information);
}, false, true);
```
```json
{
  "code": "200",
  "title": "OK",
  "summary": "standard response for successful HTTP requests",
  "references": {
    "rails": {
      "title": "Rails HTTP Status Symbol",
      "value": ":ok"
    }
  },
  "status": "success"
}
```

### Report with both descriptions and references.
```js
hsc.code(200, function(information) {
  console.log(information);
}, true, true);
```

```json
{
  "code": "200",
  "title": "OK",
  "summary": "standard response for successful HTTP requests",
  "descriptions": {
    "wikipedia": {
      "body": "Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request the response will contain an entity describing or containing the result of the action.",
      "link": "http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#200"
    },
    "ietf": {
      "body": "The request has succeeded. The information returned with the response is dependent on the method used in the request, for example: GET an entity corresponding to the requested resource is sent in the response; HEAD the entity-header fields corresponding to the requested resource are sent in the response without any message-body; POST an entity describing or containing the result of the action;",
      "link": "http://www.ietf.org/rfc/rfc2616.txt"
    }
  },
  "references": {
    "rails": {
      "title": "Rails HTTP Status Symbol",
      "value": ":ok"
    }
  },
  "status": "success"
}
```

In the event of an error, the `status` property will become `"error"` and the `error` property will hold the error.

### Invalid HTTP status code.
```js
hsc.code(2500, function(information) {
  console.log(information);
});
```

```json
{
  "status": "error",
  "error": "Invalid code 2500."
}
```

### Miscellaneous error during request.
```js
// Some call.
```

```json
{
  "status": "error",
  "error": "Error with request."
}
```

These examples, excluding the "Miscellaneous error during request.", can also be found in `/examples/everything.js`.

## Contributing
Contributions are always welcome.

We follow [Airbnb's coding standard](https://github.com/airbnb/javascript), so make sure you use that as a guideline.

Fork our code, make a new branch, and send a pull request.

## TODO:
