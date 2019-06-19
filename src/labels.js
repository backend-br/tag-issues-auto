const labels = {
    labelExist: (word) => {
        let labelsJSON = labels.parseJSON();

        return labelsJSON.includes(word);
    },
    parseJSON: () => {
        let isMockActive = true;

        if (isMockActive) {
            data = require('../mocks/labels');
        }

        let result = data.map((label) => {
            return label.name;
        })

        return result;
    }
}

module.exports = {
    labels,
};