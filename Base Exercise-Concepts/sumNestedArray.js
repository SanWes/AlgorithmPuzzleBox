/*
Sum of Nested Arrays
    Write a function 'sumNestedArrays' that takes an array containing numbers and arrays of numbers, and returns the total sum of all numbers, regardless of nesting depth.

For example:
sumNestedArrays([1, [2, 3], [4, [5]]]) should return 15
*/

function sumNestedArrays (array, total = 0, i = 0) {

for (const value of array) {
    if (!Array.isArray(value)) {
    total += value;
    } else {
    total += sumNestedArrays(value)
    }
}
return total;
}

console.log(sumNestedArrays([1, [2, 3], [4, [5]]]));
