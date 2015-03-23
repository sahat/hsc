var hsc = require('../lib/hsc.js');

// Standard report with bare-bones information.
hsc.code(200, function(information) {
  console.log(information);
});

// Report with descriptions, but no references.
hsc.code(200, function(information) {
  console.log(information);
}, true);

hsc.code(200, function(information) {
  console.log(information);
}, true, false);

// Report with references, but no descriptions.
hsc.code(200, function(information) {
  console.log(information);
}, false, true);

// Report with both descriptions and references.
hsc.code(200, function(information) {
  console.log(information);
}, true, true);

// Errors.
// Invalid code.
hsc.code(2500, function(information) {
  console.log(information);
});
