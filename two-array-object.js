// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};
    let valCount = 0;
    for (let key of keys) {
        obj[key] = values[valCount] || null;
        valCount++;
    }
    return obj;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])) // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])) // {'x': 1, 'y': 2, 'z': null}