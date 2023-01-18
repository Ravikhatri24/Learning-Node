// Commonjs, Every file in node is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-syntax.js')
require('./7-mind-grenade.js')

console.log(module)
console.log(module.children[0].loaded)
console.log(data);
console.log(data.items[0]);
console.log(data.singlePerson.name);
console.log(names);
sayHi(names.first);
sayHi(names.last);