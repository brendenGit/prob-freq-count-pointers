// add whatever parameters you deem necessary
function freqCounter(num) {
    //create frequencey map
    const frequencyMap = new Map();

    //create str from num
    const numString = num.toString();

    //add numbers to map
    for (let num of numString) {
        frequencyMap.set(num, frequencyMap.get(num) + 1 || 1)
    }
    return frequencyMap;
}

function sameFrequency(num1, num2) {
    //create frequency maps
    const num1Freq = freqCounter(num1);
    const num2Freq = freqCounter(num2);

    //check frequencies
    for (let num of num1Freq.keys()) {
        if (num1Freq.get(num) !== num2Freq.get(num)) return false;
    }
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
