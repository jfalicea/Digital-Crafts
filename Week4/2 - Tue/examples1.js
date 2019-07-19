const numbers = [1, 2, 3, 4, 5];
// forEach
function log(what) {
    console.log(what)
}
// The log() function just prints the argument to the console
// log("hi");
// for each entry in the numbers array, run the log()
numbers.forEach(log);
// forEach with a function expression
numbers.forEach(function (what) {
    console.log(what);
});
// Show all the arguments, explicit and implied
numbers.forEach(function (what, i, arr) {
    console.log(`${i}: ${what} is a part or ${arr}.`)
})
// MATHS!!
const squares = [];
function square(n) {
    return n * n;
}
// for each number in numbers, invoke the function square()
// and push the result into the squares array
numbers.forEach(function (number) {
    squares.push(square(number));
});
console.log(squares);
// Array.map
// for each number in numbers, map that
// and run it through the square function
// and add that to a new array called squaresMap
const squaresMap = numbers.map(square);
console.log(squaresMap);