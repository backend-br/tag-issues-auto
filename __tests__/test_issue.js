const issue = require('../src/issue');

test('Retorno da função está com a assinatura de JSON esperada?', () => {
    let expected = require('../mocks/issue_single');

    expect(issue.issue.get()).toEqual(expected);
});

test('Extraindo array dos espaços das descrições', () => {
    let expected = [
        "I'm", "having", "a", "problem", "with", "this."
    ]

    expect(issue.issue.explodeDescriptionBySpace("I'm having a problem with this."))
        .toEqual(expected);
})

test('Procurando labels a partir da descrição', () => {
    let words = issue.issue.explodeDescriptionBySpace("I'm having a problem with this.");

    expect(issue.issue.findLabelsByWords(words))
        .toEqual([
            "having",
            "problem"
        ])
})