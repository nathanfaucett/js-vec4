global.vec4 = require("../src/index");


var a = vec4.create(2, 5, 3),
    b = vec4.create(3, -4, -1),
    c = vec4.add(vec4.create(), a, b);


console.log(vec4.length(c));
console.log(vec4.setLength(c, c, 10));
console.log(vec4.normalize(c, c));
console.log(vec4.length(c));
