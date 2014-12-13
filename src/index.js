var mathf = require("mathf");


var vec4 = module.exports;


vec4.create = function(x, y, z, w) {
    var v = new mathf.ArrayType(4);

    v[0] = x !== undefined ? x : 0;
    v[1] = y !== undefined ? y : 0;
    v[2] = z !== undefined ? z : 0;
    v[3] = w !== undefined ? w : 1;

    return v;
};

vec4.copy = function(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];

    return a;
};

vec4.set = function(a, x, y, z, w) {
    a[0] = x !== undefined ? x : 0;
    a[1] = y !== undefined ? y : 0;
    a[2] = z !== undefined ? z : 0;
    a[3] = w !== undefined ? w : 1;

    return a;
};

vec4.add = function(a, b, out) {
    out = out || a;

    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];

    return a;
};

vec4.sub = function(a, b, out) {
    out = out || a;

    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];

    return out;
};

vec4.mul = function(a, b, out) {
    out = out || a;

    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];

    return out;
};

vec4.div = function(a, b, out) {
    var bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    out = out || a;

    out[0] = a[0] * (bx !== 0 ? 1 / bx : bx);
    out[1] = a[1] * (by !== 0 ? 1 / by : by);
    out[2] = a[2] * (bz !== 0 ? 1 / bz : bz);
    out[3] = a[3] * (bw !== 0 ? 1 / bw : bw);

    return out;
};

vec4.sadd = function(a, s, out) {
    out = out || a;

    out[0] = a[0] + s;
    out[1] = a[1] + s;
    out[2] = a[2] + s;
    out[3] = a[3] + s;

    return a;
};

vec4.ssub = function(a, s, out) {
    out = out || a;

    out[0] = a[0] - s;
    out[1] = a[1] - s;
    out[2] = a[2] - s;
    out[3] = a[3] - s;

    return out;
};

vec4.smul = function(a, s, out) {
    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;

    return out;
};

vec4.sdiv = function(a, s, out) {
    s = s !== 0 ? 1 / s : s;

    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;

    return out;
};

vec4.dot = function(a, b) {

    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

vec4.lengthSq = function(a) {

    return vec4.dot(a, a);
};

vec4.length = function(a) {
    var lsq = vec4.lengthSq(a);

    return lsq !== 0 ? mathf.sqrt(lsq) : lsq;
};

vec4.invLength = function(a) {
    var lsq = vec4.lengthSq(a);

    return lsq !== 0 ? 1 / mathf.sqrt(lsq) : lsq;
};

vec4.setLength = function(a, length) {

    return vec4.smul(a, vec4.invLength(a) * length);
};

vec4.normalize = function(a) {

    return vec4.sdiv(a, vec4.length(a));
};

vec4.inverse = function(a, out) {
    out = out || a;

    out[0] = a[0] * -1;
    out[1] = a[1] * -1;
    out[2] = a[2] * -1;
    out[3] = a[3] * -1;

    return out;
};

vec4.lerp = function(a, b, x, out) {
    var lerp = mathf.lerp;

    out = out || a;

    out[0] = lerp(a[0], b[0], x);
    out[1] = lerp(a[1], b[1], x);
    out[2] = lerp(a[2], b[2], x);
    out[3] = lerp(a[3], b[3], x);

    return out;
};

vec4.min = function(a, b, out) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    out = out || a;

    out[0] = bx < ax ? bx : ax;
    out[1] = by < ay ? by : ay;
    out[2] = bz < az ? bz : az;
    out[3] = bw < aw ? bw : aw;

    return out;
};

vec4.max = function(a, b, out) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    out = out || a;

    out[0] = bx > ax ? bx : ax;
    out[1] = by > ay ? by : ay;
    out[2] = bz > az ? bz : az;
    out[3] = bw > aw ? bw : aw;

    return out;
};

vec4.clamp = function(a, min, max, out) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3],
        minx = min[0],
        miny = min[1],
        minz = min[2],
        minw = min[3],
        maxx = max[0],
        maxy = max[1],
        maxz = max[2],
        maxw = max[3];

    out = out || a;

    out[0] = x < minx ? minx : x > maxx ? maxx : x;
    out[1] = y < miny ? miny : y > maxy ? maxy : y;
    out[2] = z < minz ? minz : z > maxz ? maxz : z;
    out[3] = w < minw ? minw : w > maxw ? maxw : w;

    return out;
};

vec4.transformMat3 = function(a, m, out) {
    var x = a[0],
        y = a[1],
        z = a[2];

    out = out || a;

    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];

    return out;
};

vec4.transformMat4 = function(a, m, out) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];

    out = out || a;

    out[0] = x * m[0] + y * m[4] + z * m[8] + w * m[12];
    out[1] = x * m[1] + y * m[5] + z * m[9] + w * m[13];
    out[2] = x * m[2] + y * m[6] + z * m[10] + w * m[14];
    out[3] = x * m[3] + y * m[7] + z * m[11] + w * m[15];

    return out;
};

vec4.transformProjection = function(a, m, out) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3],
        d = x * m[3] + m[7] * y + z * m[11] + w * m[15];

    d = d !== 0 ? 1 / d : d;
    out = out || a;

    out[0] = (x * m[0] + y * m[4] + z * m[8] + w * m[12]) * d;
    out[1] = (x * m[1] + y * m[5] + z * m[9] + w * m[13]) * d;
    out[2] = (x * m[2] + y * m[6] + z * m[10] + w * m[14]) * d;
    out[3] = (x * m[3] + y * m[7] + z * m[11] + w * m[15]) * d;

    return out;
};

vec4.positionFromMat4 = function(a, m) {
    a[0] = m[12];
    a[1] = m[13];
    a[2] = m[14];
    a[3] = m[15];

    return a;
};

vec4.scaleFromMat4 = function(a, m) {
    a[0] = vec4.length(vec4.set(a, m[0], m[4], m[8], m[12]));
    a[1] = vec4.length(vec4.set(a, m[1], m[5], m[9], m[13]));
    a[2] = vec4.length(vec4.set(a, m[2], m[6], m[10], m[14]));
    a[3] = vec4.length(vec4.set(a, m[3], m[7], m[11], m[15]));

    return a;
};

vec4.equal = function(a, b) {
    return !(
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2] ||
        a[3] !== b[3]
    );
};

vec4.notEqual = function(a, b) {
    return (
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2] ||
        a[3] !== b[3]
    );
};
