module.exports = {
    simplify,
    createMetrics
}
function simplify(text) {
    if (!text || typeof text !== "string")
        throw "Invalid input";
    else {
        text = text.toLowerCase();
        text = text.replace(/[^a-z\s]/g, "");
        text = text.replace(/\s+/g, " ");
        text = text.replace(/^\s+|\s+$/, "");
        return text;
    }
}
function createMetrics(text) {
    let metric = {
        totalLetters: 0,
        totalWords: 0,
        uniqueWords: 0,
        longWords: 0,
        averageWordLength: 0,
        wordOccurrences: {}

    };
    text = simplify(text);
    let words = text.split(" ");
    let length = 0;
    let map = new Map();
    metric.totalWords = words.length;
    for (let i in words) {
        metric.totalLetters += words[i].length;
        length += words[i].length;
        if (words[i].length >= 6)
            metric.longWords++;
        if (map.has(words[i])) {
            let temp = map.get(words[i]);
            map.delete(words[i]);
            temp++;
            map.set(words[i], temp);
        }
        else
            map.set(words[i], 1);
    }
    metric.averageWordLength = length / words.length;
    metric.uniqueWords = map.size;
    map.forEach(function (item, key, mapObj) {
        metric.wordOccurrences[key] = item;
    });
    return metric;
}