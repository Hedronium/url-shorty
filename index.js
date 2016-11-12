var Core = require('./lib/core');

core = new Core();

console.log(core.encodeintstring62('https://google.com/',12545353452264563457287464));
console.log(core.decodeintstring62('https://google.com/','cb'));

console.log(core.encodeint62(12545353452264563457287464));
console.log(core.decodeint62('cb'));