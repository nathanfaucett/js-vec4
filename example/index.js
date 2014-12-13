global.vec4 = require("../src/index");


var a = vec4.create(2, 5, 3, 1),
    b = vec4.create(3, -4, 1, 1),
    c = vec4.add(a, b, vec4.create());


console.log(vec4.length(c));
console.log(vec4.setLength(c, 10));
console.log(vec4.normalize(c));
console.log(vec4.length(c));
