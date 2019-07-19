// Filtering Data
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, -9, -10];
let result = [];
// with for loop
for (let i = 0; i < numbers2.length; i++) {
    // we can check to make sure that we're tracking
    // the proper entries from our array
    //console.log(numbers[i]);
    if (numbers2[i] >= 0) {
        result.push(numbers[i]);
    }
}
console.log(result);
// reset the result array,
// we're going to use it again
result = [];
// with forEach
// for each number in the numbers array, if that number is
// greater than or equal to ZERO, push that number into
// the result[] array
numbers2.forEach(function (number) {
    // number == numbers[i]
    if (number >= 0) {
        result.push(number);
    }
});
console.log(result);
// Array.filter
function isPositive(number) {
    return number > 0;
}
// Test our isPositive() function and make sure it works...
console.log(isPositive(10));
// for each number in numbers, filter through the isPositive() function
// save the return true values into a new array called resultNew[]
const resultNew = numbers2.filter(isPositive);
console.log(resultNew);