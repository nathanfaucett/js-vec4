var tape = require("tape"),
    vec4 = require("..");


tape("vec4.copy(out, a)", function(assert) {
    assert.deepEquals(vec4.copy(vec4.create(), vec4.create(1, 1, 1, 1)), vec4.create(1, 1, 1, 1));
    assert.end();
});

tape("vec4.set(out, x, y, z, w)", function(assert) {
    assert.deepEquals(vec4.set(vec4.create(), 1, 1, 1, 1), vec4.create(1, 1, 1, 1));
    assert.end();
});

tape("vec4.add(out, a, b)", function(assert) {
    assert.deepEquals(vec4.add(vec4.create(), vec4.create(1, 0, 1, 0), vec4.create(0, 1, 0, 1)), vec4.create(1, 1, 1, 1));
    assert.end();
});

tape("vec4.sub(out, a, b)", function(assert) {
    assert.deepEquals(vec4.sub(vec4.create(), vec4.create(1, 1, 1, 1), vec4.create(1, 1, 1, 1)), vec4.create(0, 0, 0, 0));
    assert.end();
});

tape("vec4.mul(out, a, b)", function(assert) {
    assert.deepEquals(vec4.mul(vec4.create(), vec4.create(2, 2, 2, 2), vec4.create(1, 1, 1, 1)), vec4.create(2, 2, 2, 2));
    assert.end();
});

tape("vec4.div(out, a, b)", function(assert) {
    assert.deepEquals(vec4.div(vec4.create(), vec4.create(2, 2, 2, 2), vec4.create(1, 1, 1, 1)), vec4.create(2, 2, 2, 2));
    assert.end();
});

tape("vec4.sadd(out, a, s)", function(assert) {
    assert.deepEquals(vec4.sadd(vec4.create(), vec4.create(0, 0, 0, 0), 1), vec4.create(1, 1, 1, 1));
    assert.end();
});

tape("vec4.ssub(out, a, s)", function(assert) {
    assert.deepEquals(vec4.ssub(vec4.create(), vec4.create(1, 1, 1, 1), 1), vec4.create(0, 0, 0, 0));
    assert.end();
});

tape("vec4.smul(out, a, s)", function(assert) {
    assert.deepEquals(vec4.smul(vec4.create(), vec4.create(2, 2, 2, 2), 2), vec4.create(4, 4, 4, 4));
    assert.end();
});

tape("vec4.sdiv(out, a, s)", function(assert) {
    assert.deepEquals(vec4.sdiv(vec4.create(), vec4.create(2, 2, 2, 2), 2), vec4.create(1, 1, 1, 1));
    assert.end();
});

tape("vec4.dot(out, a, b)", function(assert) {
    assert.equals(vec4.dot(vec4.create(1, 1, 1, 1), vec4.create(1, 1, 1, 1)), 4);
    assert.end();
});

tape("vec4.length(out)", function(assert) {
    assert.equals(vec4.length(vec4.create(1, 1, 1, 1)), Math.sqrt(4));
    assert.end();
});

tape("vec4.setLength(out)", function(assert) {
    assert.deepEquals(vec4.setLength([], vec4.create(2, 2, 2, 2), Math.sqrt(4)), vec4.create(1, 1, 1, 1));
    assert.end();
});

tape("vec4.normalize(out, a)", function(assert) {
    assert.deepEquals(vec4.normalize([], vec4.create(0, 0, 0, 1)), vec4.create(0, 0, 0, 1));
    assert.end();
});

tape("vec4.inverse(out, a)", function(assert) {
    assert.deepEquals(vec4.inverse([], vec4.create(1, 1, 1, 1)), vec4.create(-1, -1, -1, -1));
    assert.end();
});

tape("vec4.lerp(out, a, b, x)", function(assert) {
    assert.deepEquals(vec4.lerp([], vec4.create(0, 0, 0, 0), vec4.create(2, 2, 2, 2), 0.5), vec4.create(1, 1, 1, 1));
    assert.end();
});

tape("vec4.transformQuat(out, a, q)", function(assert) {
    assert.equals(vec4.equals(
        vec4.transformMat4([], vec4.create(0, 0, 0, 1), [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]),
        vec4.create(0, 0, 0, 1)
    ), true);
    assert.end();
});
