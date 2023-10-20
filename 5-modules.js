// CommonJS every file is a module (by default)
const { james, mary } = require("./1.names");
const sayHi = require("./2.utils");
const data = require("./3.alternative-flavour");
require("./4.mind-grenade");

sayHi(james);
sayHi(mary);
// console.log(data);
