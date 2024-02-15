// add whatever parameters you deem necessary
function freqCounter(str) {
    //create frequencey map
    const frequencyMap = new Map();
    //add charcs to map
    for (let letter of str) {
        frequencyMap.set(letter, frequencyMap.get(letter) + 1 || 1)
    }
    return frequencyMap;
}

function constructNote(message, letters) {
    if (letters.length === 0) return false;
    const messageMap = freqCounter(message);
    const lettersMap = freqCounter(letters);
    for (let letter of messageMap.keys()) {
        if (messageMap.get(letter) > lettersMap.get(letter)) return false;
    }
    return true;
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true