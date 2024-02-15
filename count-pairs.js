// add whatever parameters you deem necessary
function countPairs(arr, sum) {
    //initialize pointers and results array
    let left = 0;
    let right = 1;
    let resultsCount = 0;

    while (left < arr.length - 1) {
        if (arr[left] + arr[right] === sum) {
            resultsCount++;
            left++;
            right = left + 1;
        } else if (right < arr.length - 1) {
            right++;
        } else {
            left++;
            right = left + 1;
        }
    }
    return resultsCount;
}

console.log(countPairs([3, 1, 5, 4, 2], 6)) // 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)) // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10)) // 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10)) // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)) // 0
console.log(countPairs([0, -4], -4)) // 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)) // 2