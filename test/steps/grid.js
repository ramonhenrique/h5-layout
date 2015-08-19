/* jslint node: true */

module.exports = function (library, expect, h5_test) {
    library
    .given('que o estado da estória é ([^\u0000]*)', function (estado, next) {
        expect(estado, 'estado').to.be.an('string');
        h5_test.replace('___fields___', estado);
        next();
    })
    .when('eu renderizar no mobile o (.*)', function (caso, next) {
        h5_test.replace('___caso___', caso);
        h5_test.file('app/grid.view.js');
        h5_test.serve('app/index.html');
        h5_test.pack('app', next);
        h5_test.size('748x1024');
    })
    .when('eu renderizar no desktop o (.*)', function (caso, next) {
        h5_test.replace('___caso___', caso);
        h5_test.file('app/grid.view.js');
        h5_test.serve('app/index.html');
        h5_test.pack('app', next);
    })
    .then('validar ([^\u0000]*)', function (spec, next) {
        expect(spec).to.be.an('string');
        h5_test.replace('___spec___', spec);
        h5_test.check('test/grid.spec');
        next();
    })
    .then('validar o ([^\u0000]*)', function (spec, next) {
        expect(spec).to.be.an('string');
        h5_test.replace('___spec___', spec);
        h5_test.check('test/grid.spec');
        next();
    });
};
