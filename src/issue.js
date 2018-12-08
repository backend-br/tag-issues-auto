const labels = require('./labels');

const issue = {
    get: () => {
        isMockActive = true;//process.env.MOCK

        if (isMockActive) {
            return require('../mocks/issue_single');
        }

    },
    explodeDescriptionBySpace: (text) => {
        return text.split(" ");
    },
    findLabelsByWords: (words) => {
        let result = [];

        words.map((word) => {
            if (labels.labels.labelExist(word)) {
                result.push(word);
            }
        });

        return result;
    }
}

module.exports = {
    issue,
}