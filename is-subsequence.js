// the function should check whether the characters in the first string 
// appear somewhere in the second string, without their order changing.

// turn str1 into an array and shift values as we find them return false if array has length true if not
function isSubsequence(str1, str2) {
    // if the supposed subset is larger than the value we are checking, return false
    if (str1.length > str2.length) return false;

    // turn str1 into array
    const str1Arr = str1.split('');
    let str2Count = 0;

    while (str2Count < str2.length) {
        if (str2[str2Count] === str1Arr[0]) {
            str1Arr.shift();
            str2Count++;
        } else {
            str2Count++;
        }
    }
    //perform check
    return str1Arr.length ? false : true;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)