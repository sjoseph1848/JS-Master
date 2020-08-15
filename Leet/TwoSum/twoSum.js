
const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const targNum = 10;

let test = twoNumberSum(arr, targNum);
console.log(test)

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        console.log(`Here is the right: ${array[right]}, Here is the left: ${array[left]}`);
        console.log(`Here is the current Sum: ${currentSum}`)
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}