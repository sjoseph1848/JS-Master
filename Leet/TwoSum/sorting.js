let points = [40, 100, 1, 5, 25, 10];

let sortedPoints = points.sort((a, b) => a - b);
console.log(sortedPoints);


let descendingSort = points.sort((a, b) => b - a);

console.log(descendingSort);


function twoSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    // If you want to interact with each element in the array you need one less than the length otherwise you'll get one over 
    //arr[8] instead of arr[7]
    while (left < right) {
        let currentSum = array[left] + array[right];

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