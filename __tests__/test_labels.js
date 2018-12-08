const labels = require('../src/labels');

test('Testando o parse do JSON', () => {
    let expected = ['problem', 'enhancement', 'having'];

    expect(labels.labels.parseJSON()).toEqual(expected);
})