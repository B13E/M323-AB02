// 4a
const Ramda = require('ramda');

function isNumeric(character) {
    return !isNaN(character);
}

function splitIntoCharacters(str) {
    return str.split('');
}

function countNumerics(arr) {
    return arr.filter(isNumeric).length;
}

const countNumericCharacters = Ramda.compose(
    countNumerics,
    splitIntoCharacters
);

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const result = countNumericCharacters(sentence);
console.log("Anzahl numerischer Zeichen:", result);